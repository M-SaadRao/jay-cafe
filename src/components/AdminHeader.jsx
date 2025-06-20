import { Button, message, Modal } from 'antd';
import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../store/user/userSlice';
import { setCart, setCartPrice } from '../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

    const handleConfirmLogout = () => {
        dispatch(setCurrentUser(null));
        dispatch(setCart([]));
        dispatch(setCartPrice(null));
        message.success("Logout Successfully");
        navigate("/login");
        setIsLogoutModalVisible(false);
    };

    const showLogoutModal = () => {
        setIsLogoutModalVisible(true);
    };

    const handleCancelLogout = () => {
        setIsLogoutModalVisible(false);
    };

    return (
        <div className='bg-primary px-6 py-3 flex justify-between items-center w-full'>
            <FaCircleUser className='text-[30px] cursor-pointer text-white' />
            <Button className='bg-white text-primary font-bold' onClick={showLogoutModal}>
                Logout
            </Button>
            <Modal
                title="Confirm Logout"
                open={isLogoutModalVisible}
                onOk={handleConfirmLogout}
                onCancel={handleCancelLogout}
                okText="Yes"
                cancelText="No"
            >
                <p>Are you sure you want to logout?</p>
            </Modal>
        </div>
    );
}

export default AdminHeader;
