import React, { useEffect, useState } from 'react';
import Container from "../components/Container";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';
import axios from 'axios';
import { formatDate, formatTime } from '../utils/functions';
import { Modal, Tag, message } from 'antd';
import AdminHeader from '../components/AdminHeader';

const SingleOrderDetails = () => {
    const { id } = useParams();
    const [orderData, setOrderData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeStatus, setActiveStatus] = useState("");
    const [statusToggler, setStatusToggler] = useState(false);
    const [statusLoading, setStatusLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/orderdetailsbykey.php?okey=${id}&_=${new Date().getTime()}`);
                if (resp.data && resp.data.order_details) {
                    setOrderData(resp.data);
                    setActiveStatus(resp.data.ostatus);
                    const prices = resp.data.order_details.map((item) => +(+item.price * +item.quantity));
                    let bill = 0;
                    prices.forEach(element => {
                        bill += element;
                    });
                    setTotalPrice(bill);
                } else {
                    message.error("Invalid order key or order not found");
                    navigate('/');
                }
            } catch (error) {
                console.error(error);
                message.error("An error occurred while fetching order details");
                navigate('/');
            }
        })();
    }, [id, navigate, statusToggler]);

    const updateStatus = async () => {
        setStatusLoading(true);
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/updateorder.php`, { order_id: orderData.oid, status: activeStatus });
            setStatusToggler(!statusToggler);
        } catch (error) {
            console.error(error);
            message.error("An error occurred while updating the order status");
        }
        setIsModalOpen(false);
        setStatusLoading(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleStatusChange = (orderStatus) => {
        setActiveStatus(orderStatus);
    };

    const handleStatusModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <AdminHeader />
            {orderData ? (
                <Container>
                    <Link to="/">
                        <h1 className='text-center font-bold text-[25px] my-2 playFont text-primary underline-offset-8 underline'>Jay Cafe</h1>
                    </Link>
                    <div className='bg-white rounded-xl shadow-lg p-5 mt-4 flex flex-col justify-between relative'>
                        <div>
                            <p className='text-[22px] font-medium text-gray-700 underline underline-offset-4 mb-4'>Order ID : #{orderData.order_key}</p>
                            <p className='text-[18px] font-medium text-gray-700'>Order Details</p>
                            <p className='text-gray-500'>Delivery Address: {orderData.address}</p>
                            <p className='text-gray-700 font-medium mt-1'>Order Date: {formatDate(orderData.odate)}, {formatTime(orderData.otime)}</p>
                            <p className='text-[18px] font-medium text-gray-700 my-2'>Customer Phone : <span className='text-primary'>{orderData.phone}</span></p>
                            <p className='text-[18px] font-medium text-gray-700 mt-4 mb-2'>Items:</p>
                            {orderData.order_details.map((item, index) => (
                                <p key={index + item.name} className='text-gray-500 flex items-center justify-between text-[18px]'>
                                    <span>
                                        {item.quantity}x {item.name}
                                    </span>
                                    <span>
                                        Rs: {+item.quantity * +item.price}
                                    </span>
                                </p>
                            ))}
                        </div>
                        <div className='mt-2 pt-2 border-t border-gray-500'>
                            <p className='text-gray-700 font-medium text-[18px] flex items-center justify-between'>
                                <span>
                                    Subtotal
                                </span>
                                <span>
                                    Rs: {totalPrice}
                                </span>
                            </p>
                            <p className='text-gray-700 font-medium text-[18px] flex items-center justify-between'>
                                <span>
                                    Delivery
                                </span>
                                <span>
                                    Free
                                </span>
                            </p>
                            <p className='text-gray-700 font-medium text-[18px] flex items-center justify-between'>
                                <span>
                                    Grand Total
                                </span>
                                <span>
                                    Rs: {totalPrice}
                                </span>
                            </p>
                        </div>
                        <span onClick={handleStatusModal} className='block cursor-pointer absolute right-2 top-2 capitalize px-[5px] border-2 border-primary text-white bg-primary rounded-xl'>
                            {orderData.ostatus}
                        </span>
                    </div>

                    <Modal
                        title="Set Order Status"
                        okText="Update Status"
                        centered
                        open={isModalOpen}
                        onOk={updateStatus}
                        onCancel={handleCancel}
                        confirmLoading={statusLoading}
                    >
                        <div className="text-center px-4 py-2 gap-3 flex justify-center items-center">
                            <div className="space-y-4">
                                <div>
                                    <Tag
                                        color={activeStatus === 'Process' ? 'blue' : 'geekblue'}
                                        className={`cursor-pointer p-1 m-2 rounded-md border-2 ${activeStatus === 'Process' ? 'border-black' : 'border-transparent'}`}
                                        onClick={() => handleStatusChange("Process")}
                                    >
                                        Process
                                    </Tag>

                                    <Tag
                                        color={activeStatus === 'Pending' ? 'orange' : 'volcano'}
                                        className={`cursor-pointer p-1 m-2 rounded-md border-2 ${activeStatus === 'Pending' ? 'border-black' : 'border-transparent'}`}
                                        onClick={() => handleStatusChange("Pending")}
                                    >
                                        Pending
                                    </Tag>

                                    <Tag
                                        color={activeStatus === 'Dispatched' ? 'purple' : 'magenta'}
                                        className={`cursor-pointer p-1 m-2 rounded-md border-2 ${activeStatus === 'Dispatched' ? 'border-black' : 'border-transparent'}`}
                                        onClick={() => handleStatusChange("Dispatched")}
                                    >
                                        Dispatched
                                    </Tag>

                                    <Tag
                                        color={activeStatus === 'Completed' ? 'green' : 'lime'}
                                        className={`cursor-pointer p-1 m-2 rounded-md border-2 ${activeStatus === 'Completed' ? 'border-black' : 'border-transparent'}`}
                                        onClick={() => handleStatusChange("Completed")}
                                    >
                                        Completed
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </Modal>

                </Container>
            ) : (
                <Preloader />
            )}
        </>
    );
}

export default SingleOrderDetails;
