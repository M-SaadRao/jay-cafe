import React, { useEffect, useState, useCallback } from 'react';
import Container from "../components/Container";
import logo from "../assets/images/final-logo.png";
import pendingImg from "../assets/images/order-status-pending.png";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';
import axios from 'axios';
import { formatDate, formatTime } from '../utils/functions';

const OrderDetails = () => {
    
    const { id } = useParams();
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(null);
    const navigate = useNavigate();

    // Function to fetch order details, wrapped in useCallback to avoid changing reference
    const fetchOrderDetails = useCallback(async () => {
        try {
            const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/orderdetailsbykey.php?okey=${id}&_=${new Date().getTime()}`);
            setOrderData(resp.data);
            const prices = resp.data.order_details.map((item) => +(+item.price * +item.quantity));
            let bill = 0;
            prices.forEach(element => {
                bill += element;
            });
            setTotalPrice(bill);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            navigate('/');
        }
    }, [id, navigate]); // Dependencies are id and navigate

    useEffect(() => {
        // Fetch order details immediately on component mount
        fetchOrderDetails();

        // Set up an interval to fetch order details every 30 seconds
        const intervalId = setInterval(() => {
            fetchOrderDetails();
        }, 30000); // 30 seconds

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [fetchOrderDetails]); // Only run when fetchOrderDetails changes

    if (loading) {
        return <Preloader />;
    }

    return (
        <Container>
            <div className='flex justify-center mb-5'>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-[110px]' />
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className='bg-white rounded-xl shadow-lg p-3 mt-4'>
                    <div className="text-center my-5">
                        <p className='text-sm font-light m-0 p-0 leading-none'>Your order status is</p>
                        <h2 className='font-bold text-[30px] text-gray-700'>{orderData.ostatus}</h2>
                        <div className="flex justify-center">
                            <img src={pendingImg} alt="pending order" className='w-[150px] my-3' />
                        </div>
                        <p>Your Order is Received. Stay updated about your order details.</p>
                        <h3 className='font-medium text-[20px] my-3'>Order Number: {orderData.order_key}</h3>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-lg p-5 mt-4 flex flex-col justify-between'>
                    <div>
                        <p className='text-[18px] font-medium text-gray-700'>Order Details</p>
                        <p className='text-xs text-gray-500'>Delivery Address: {orderData.address}</p>
                        <p className='text-xs text-gray-700 font-medium mt-1'>Order Date: {formatDate(orderData.odate)}, {formatTime(orderData.otime)}</p>
                        <p className='text-[18px] font-medium text-gray-700 mt-4 mb-2'>Items:</p>
                        {orderData.order_details.map((item, index) => (
                            <p key={index + item.name} className='text-xs text-gray-500 flex items-center justify-between'>
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
                        <p className='text-gray-700 font-medium text-[15px] flex items-center justify-between'>
                            <span>
                                Subtotal
                            </span>
                            <span>
                                Rs: {totalPrice}
                            </span>
                        </p>
                        <p className='text-gray-700 font-medium text-[15px] flex items-center justify-between'>
                            <span>
                                Delivery
                            </span>
                            <span>
                                Free
                            </span>
                        </p>
                        <p className='text-gray-700 font-medium text-[15px] flex items-center justify-between'>
                            <span>
                                Grand Total
                            </span>
                            <span>
                                Rs: {totalPrice}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OrderDetails;
