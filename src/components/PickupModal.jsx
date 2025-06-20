import React, { useEffect } from 'react';
import { Modal, Button } from 'antd';
import logo from "../assets/images/final-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { setUserSelectedOrderType, setUserPickupModal } from '../store/user/userSlice';

const PickupModal = () => {
    const dispatch = useDispatch();
    const { userSelectedOrderType, userPickupModal } = useSelector(state => state.user);

    useEffect(() => {
        if (userSelectedOrderType !== "pickup" && userSelectedOrderType !== "delivery") {
            dispatch(setUserPickupModal(true));
        }
    }, [userSelectedOrderType, dispatch]);

    const handlePickup = () => {
        dispatch(setUserSelectedOrderType("pickup"));
        dispatch(setUserPickupModal(false));
    };

    const handleDelivery = () => {
        dispatch(setUserSelectedOrderType("delivery"));
        window.open('https://order.online/business/the-jay-cafe-11170940', '_blank');
        dispatch(setUserPickupModal(false));
    };

    const handleCancel = () => {
        dispatch(setUserPickupModal(false));
    };

    return (
        <Modal
            open={userPickupModal}
            onCancel={handleCancel}
            footer={null}
            centered
            maskClosable={false}
        >
            <div className="p-6 bg-white rounded-lg text-center">
                <div className="mb-4">
                    <img
                        src={logo}
                        alt="Logo"
                        className="mx-auto w-[70px]"
                    />
                </div>
                <h2 className="text-3xl font-medium mb-2">Order Now</h2>
                <p className="text-lg text-gray-600 mb-4">Track Your Order Online</p>

                <Button
                    type="primary"
                    className="w-full mb-2"
                    onClick={handlePickup}
                    size='large'
                >
                    Order Pickup
                </Button>
                <Button
                    type="default"
                    className="w-full"
                    onClick={handleDelivery}
                    size='large'
                >
                    Order Delivery
                </Button>
            </div>
        </Modal>
    );
};

export default PickupModal;
