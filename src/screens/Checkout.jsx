import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import { Button, Empty, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import cash from "../assets/images/cash.png";
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { setCart, setCartPrice } from '../store/cart/cartSlice';
import usePost from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';
import { getEmailTemplate } from '../utils/functions';

const paymentMethods = [
    { id: 1, name: "Cash On Delivery" },
];

const Checkout = () => {
    const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState(null); // State to hold selected payment method ID
    const { cartItems } = useSelector(state => state.cart);
    const { isGuest, currentUser } = useSelector(state => state.user);
    const { post, loading } = usePost();
    const [totalPrice, setTotalPrice] = useState(500);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [specialInstruction, setSpecialInstruction] = useState('');
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


    // Function to handle payment method selection
    const handlePaymentMethodSelect = (method) => {
        setSelectedPaymentMethodId(prevSelectedId => prevSelectedId === method.id ? prevSelectedId : method.id);
    };

    const placeOrder = async () => {
        let orderInfo = cartItems.map((item) => (
            {
                qty: item.quantity,
                product_id: item.productId,
                variation_id: item.selectedVariation ? item.selectedVariation.v_id : "0",
                addon_id: item.selectedAddons.length > 0 ? item.selectedAddons.map((addon) => addon.a_id).join(',') : "0",
                drink_id: item.selectedDrink ? item.selectedDrink.id : "0",
                combo_id: item.selectedCombo ? item.selectedCombo.c_id : '0',
                topping_id: item.selectedTopping ? item.selectedTopping.t_id : "0",
                flavour_id: item.selectedFlavour ? item.selectedFlavour.id : "0",
            }
        ));
        let customerInfo;
        if (isGuest) {
            if (!fullName || !phoneNumber || !address) {
                message.error("Please Complete Information Form");
                return;
            }
            customerInfo = {
                fullname: fullName,
                phone: phoneNumber,
                address: address,
                customer_id: "0",
            };
        } else {
            customerInfo = {
                fullname: `${currentUser.fname} ${currentUser.lname}`,
                phone: currentUser.phone,
                address: address,
                customer_id: currentUser.id,
            };
        }

        const payload = {
            ...customerInfo,
            amount: totalPrice,
            restaurant_id: "1",
            instructions: specialInstruction,
            order_details: orderInfo,
        };

        const emailOrderInfo = cartItems.map((item) => {
            return ({
                productName: item.productName,
                quantity: item.quantity,
                productPrice: item.productPrice,
            })
        })

        const emailInfo = {
            ...payload,
            order_details: emailOrderInfo,
        }

        const emailTemplate = getEmailTemplate(emailInfo);

        const newPayload = {
            ...payload,
            email: "ebadtahiri@gmail.com",
            email_template: emailTemplate
        }

        try {
            const resp = await post("/addorder.php", newPayload);
            if (resp.success) {
                message.success(resp.message);
                dispatch(setCart([]));
                navigate(`/orderdetails/${resp.order_key}`);
            } else {
                message.error("Something Went Wrong");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <div className='bg-white px-4 py-6 rounded-xl border-2 border-gray-200 shadow-sm'>
                <div className="flex item-center gap-1 mb-3">
                    <span className='text-sm text-gray-600'>Home</span>
                    <span className='text-sm text-gray-600'>&gt;</span>
                    <span className='text-sm text-primary'>Checkout</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className='col-span-3 md:col-span-2'>
                        <div className='rounded-xl bg-[#F8F9FA] shadow-sm p-3'>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <span className='text-[16px] block mb-2'>Full Name</span>
                                    <Input
                                        type='text'
                                        placeholder='Enter Your Name'
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required // Add required attribute
                                    />
                                </div>
                                <div>
                                    <span className='text-[16px] block mb-2'>Phone Number</span>
                                    <Input
                                        type='number'
                                        placeholder='Enter Phone Number'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required // Add required attribute
                                    />
                                </div>
                                <div>
                                    <span className='text-[16px] block mb-2'>Email</span>
                                    <Input
                                        type='email'
                                        placeholder='Enter Email Address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required // Add required attribute
                                    />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <span className='text-[16px] block mb-2'>Your Address</span>
                                <Input
                                    type='text'
                                    placeholder='Enter Your Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required // Add required attribute
                                />
                            </div>
                        </div>
                        <div className='rounded-xl bg-[#F8F9FA] shadow-sm p-3 mt-6'>
                            <h2 className='text-[17px] text-gray-800 mb-2'>Special Instruction</h2>
                            <TextArea
                                className='rounded-xl'
                                placeholder='Add any comment, e.g. about allergies, or delivery instructions here.'
                                rows={4}
                                value={specialInstruction}
                                onChange={(e) => setSpecialInstruction(e.target.value)}
                            />
                        </div>
                        <div className='rounded-xl bg-[#F8F9FA] shadow-sm p-3 mt-6'>
                            <h2 className='text-[17px] text-gray-800 mb-2'>Select Payment Method</h2>
                            <div className="flex items-center gap-3">
                                {paymentMethods.map(method => (
                                    <div
                                        key={method.id}
                                        className={`cursor-pointer rounded-full flex gap-2 items-center border-2 ${selectedPaymentMethodId === method.id ? 'border-primary' : 'border-gray-300'} shadow-sm px-3 py-2`}
                                        onClick={() => handlePaymentMethodSelect(method)}
                                    >
                                        <img src={cash} alt="cash" className='w-[20px]' />
                                        <span className='text-sm'>{method.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-1'>
                        <div className='rounded-xl bg-[#F8F9FA] shadow-sm p-3'>
                            <h2 className='font-bold border-b border-gray-400 p-2 mb-2'>Cart</h2>
                            {cartItems && cartItems.length > 0 ?
                                cartItems.map((item) => (
                                    <CartItem key={item.cartItemId} item={item} forComponent="checkout" />
                                ))
                                :
                                <div className="flex justify-center items-center mt-10">
                                    <Empty description="No Items" />
                                </div>
                            }
                            <div className='py-3 border-t border-gray-400'>
                                {
                                    cartItems.length > 0 &&
                                    <div className="p-4">
                                        <div className='mb-2'>
                                            <p className="text-sm font-medium text-gray-600 flex justify-between items-center"><span>Subtotal:</span> <span>${totalPrice}</span></p>
                                            <p className="text-sm font-medium text-gray-600 flex justify-between items-center"><span>Delivery:</span> <span>$0</span></p>
                                            <p className="text-sm font-medium text-gray-600 flex justify-between items-center"><span>Grand Total:</span> <span>${totalPrice}</span></p>
                                        </div>
                                        <Button type="primary" className='w-full' size='large' onClick={placeOrder} loading={loading}>Place Order</Button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Checkout;