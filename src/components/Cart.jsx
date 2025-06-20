import React, { memo, useEffect, useState } from 'react';
import CartItem from './CartItem';
import { Button, Drawer, Empty, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setCartPrice } from '../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { setIsGuest } from '../store/user/userSlice';

const Cart = ({ onCloseCart, visibleCart }) => {

    const { cartItems } = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(500);
    const [showClearCartModal, setShowClearCartModal] = useState(false);
    const [showLoginGuestModal, setShowLoginGuestModal] = useState(false);
    const { currentUser, isGuest } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const prices = cartItems.map((item) => +(+item.productPrice * +item.quantity));
        let bill = 0;
        prices.forEach(element => {
            bill += element;
        });
        setTotalPrice(bill);
        dispatch(setCartPrice(bill));
    }, [cartItems, dispatch]);

    const handleClearCart = () => {
        dispatch(setCart([]));
        setShowClearCartModal(false);
        onCloseCart();
    };

    const openClearCartModal = () => {
        setShowClearCartModal(true);
    };

    const closeClearCartModal = () => {
        setShowClearCartModal(false);
    };

    const openLoginGuestModal = () => {
        setShowLoginGuestModal(true);
    }

    const closeLoginGuestModal = () => {
        setShowLoginGuestModal(false);
    }

    const handleLogin = () => {
        closeLoginGuestModal();
        onCloseCart();
        navigate("/login");
    }

    const handleGuest = () => {
        dispatch(setIsGuest(true));
        closeLoginGuestModal();
        onCloseCart();
        navigate("/checkout");
    }

    const handleCheckout = () => {
        if (!currentUser && !isGuest) {
            openLoginGuestModal();
        } else {
            onCloseCart();
            navigate("/checkout");
        }
    }

    return (
        <>
            <Drawer
                title={
                    <div className="flex justify-between items-center w-full">
                        <span>Cart</span>
                        {cartItems.length > 0 &&
                            <span className='text-red-500 cursor-pointer' onClick={openClearCartModal}>Clear Cart</span>
                        }
                    </div>
                }
                placement="right"
                // width={350}
                onClose={onCloseCart}
                open={visibleCart}
                className='bg-[#F8F9FA] p-0 w-full'
                footer={
                    cartItems.length > 0 &&
                    <div className="p-4">
                        <div className='mb-2'>
                            <p className="text-sm font-medium text-gray-600 flex justify-between items-center"><span>Subtotal:</span> <span>${totalPrice}</span></p>
                            <p className="text-sm font-medium text-gray-600 flex justify-between items-center"><span>Delivery:</span> <span>$0</span></p>
                            <p className="text-sm font-medium text-gray-600 flex justify-between items-center"><span>Grand Total:</span> <span>${totalPrice}</span></p>
                        </div>
                        <Button onClick={handleCheckout} type="primary" className='w-full' classNames="mt-2">Checkout</Button>
                    </div>
                }
            >
                <div className='p-3'>
                    {cartItems && cartItems.length > 0 ?
                        cartItems.map((item) => (
                            <CartItem key={item.cartItemId} item={item} forComponent="cart" />
                        ))
                        :
                        <div className="flex justify-center items-center mt-10">
                            <Empty description="No Items" />
                        </div>
                    }
                </div>
            </Drawer>
            <Modal
                title="Clear Cart"
                open={showClearCartModal}
                onOk={handleClearCart}
                onCancel={closeClearCartModal}
                okText="Clear"
                cancelText="Cancel"
            >
                <p>Are you sure you want to clear the cart?</p>
            </Modal>
            <Modal
                title="Select User Mode"
                open={showLoginGuestModal}
                onCancel={closeLoginGuestModal}
                footer={null}
            >
                <div className='flex justify-center items-center pb-4'>
                    <div>
                        <Button onClick={handleLogin} type="primary" className='w-full' classNames="mt-2">Login Now</Button>
                        <hr className='w-full my-5 h-[2px] bg-gray-200' />
                        <Button onClick={handleGuest} type="primary" className='w-full' classNames="mt-2">Order As Guest</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default memo(Cart);
