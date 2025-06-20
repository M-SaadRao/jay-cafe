import axios from 'axios';
import React, { memo, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Assuming you're using react-icons for the trash icon
import { useDispatch, useSelector } from 'react-redux';
import { setUserAddress } from '../store/user/userSlice';
import { message, Modal } from 'antd';

const AddressCard = ({ address }) => {

    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const showDeleteConfirm = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        setLoading(true);
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}/deleteaddress.php?addressid=${address.address_id}&_=${new Date().getTime()}`);
            const latestAddresses = await axios.get(`${process.env.REACT_APP_BASE_URL}/addresse.php?cid=${currentUser.id}&_=${new Date().getTime()}`);
            dispatch(setUserAddress(latestAddresses.data));
            message.success("Address Deleted");
        } catch (error) {
            message.error("Failed to delete the address");
        } finally {
            setIsModalVisible(false);
        }
        setLoading(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="flex flex-col justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm h-32">
            <div>
                <h2 className="text-base font-semibold">{address.address.split(" | ")[1]}</h2>
                <p className="text-sm text-gray-600">{address.address.split(" | ")[0]}</p>
            </div>
            <div className="flex justify-end items-end">
                <button onClick={showDeleteConfirm} className="text-gray-600 hover:text-gray-800">
                    <FaTrash className="w-5 h-5 text-red-500" />
                </button>
            </div>
            <Modal
                title="Delete Address"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Yes"
                cancelText="No"
                confirmLoading={loading}
            >
                <p className='font-medium'>Do you want to delete this address?</p>
            </Modal>
        </div>
    );
};

export default memo(AddressCard);
