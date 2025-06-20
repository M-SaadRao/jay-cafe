import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Space, Tag, Modal, Tabs } from 'antd';
import { FaEllipsisVertical } from "react-icons/fa6";
import Container from '../components/Container';
import axios from 'axios';
import { formatDate } from '../utils/functions';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

const { TabPane } = Tabs;

const AdminPanel = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [order, setOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeStatus, setActiveStatus] = useState("");
    const [statusToggler, setStatusToggler] = useState(false);
    const [statusLoading, setStatusLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch orders data
    const fetchData = async () => {
        setLoading(true);
        try {
            const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/getrestaurantorder.php`, { restorant_id: 1 });
            setAllOrders(resp.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data initially on mount

        // Set up an interval to fetch data every 30 seconds
        const intervalId = setInterval(() => {
            fetchData();
        }, 30000); // 30 seconds

        // Clear the interval when component is unmounted
        return () => clearInterval(intervalId);
    }, [statusToggler]);

    const handleStatus = async () => {
        setIsModalOpen(true);
        setActiveStatus(order.ostatus);
    }

    const gototDetail = () => {
        navigate(`/singleorder/${order.order_key}`);
    }

    const items = [
        {
            label: <p onClick={gototDetail}>View Details</p>,
            key: '0',
        },
        {
            label: <p onClick={handleStatus}>Change Status</p>,
            key: '1',
        }
    ];

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'order_key',
            key: 'order_key',
        },
        {
            title: 'Customer Name',
            dataIndex: 'fullname',
            key: 'fullname',
        },
        {
            title: 'Amount',
            dataIndex: 'oamount',
            key: 'oamount',
        },
        {
            title: 'Date',
            dataIndex: 'odate',
            key: 'odate',
        },
        {
            title: 'Status',
            dataIndex: 'ostatus',
            key: 'ostatus',
            render: (ostatus) => (
                <Tag color={ostatus === 'Pending' ? 'orange' : ostatus === 'Process' ? 'blue' : ostatus === 'Dispatched' ? 'purple' : 'green'}>
                    {ostatus}
                </Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <div className='cursor-pointer hover:text-theme'>
                        <Space className='w-full flex justify-center' onClick={() => setOrder(record)}>
                            <FaEllipsisVertical />
                        </Space>
                    </div>
                </Dropdown>
            ),
        },
    ];

    const dataSource = allOrders.map(order => ({
        key: order.order_key,
        order_key: order.order_key,
        fullname: order.fullname,
        oamount: order.oamount,
        odate: formatDate(order.odate),
        ostatus: order.ostatus,
        order_id: order.oid
    }));

    const updateStatus = async () => {
        setStatusLoading(true);
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/updateorder.php`, { order_id: order.order_id, status: activeStatus });
            setStatusToggler(!statusToggler);
        } catch (error) {
            console.error(error);
        }
        setIsModalOpen(false);
        setStatusLoading(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const handleStatusChange = (orderStatus) => {
        setActiveStatus(orderStatus);
    }

    const renderTable = (status) => {
        const filteredData = dataSource
            .filter(order => order.ostatus === status)
            .sort((a, b) => b.order_id - a.order_id);

        return (
            filteredData.length > 0 && (
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{ pageSize: 8 }}
                    scroll={{ x: '100%' }}
                    loading={loading}
                />
            )
        );
    };

    return (
        <>
            <AdminHeader />
            <Container>
                <h1 className='text-center font-bold text-[25px] my-2 playFont text-primary underline-offset-8 underline'>Jay Cafe</h1>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Pending" key="1">
                        {renderTable('Pending')}
                    </TabPane>
                    <TabPane tab="Process" key="2">
                        {renderTable('Process')}
                    </TabPane>
                    <TabPane tab="Dispatched" key="3">
                        {renderTable('Dispatched')}
                    </TabPane>
                    <TabPane tab="Completed" key="4">
                        {renderTable('Completed')}
                    </TabPane>
                </Tabs>

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
        </>
    );
};

export default AdminPanel;