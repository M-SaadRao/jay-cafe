import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Empty, Spin } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import OrderCard from "../components/OrderCard";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/ordercustomer.php?customer_id=${currentUser.id}&_=${new Date().getTime()}`
                );
                setOrders(resp.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [currentUser]);

    return (
        <Container>
            <div className="bg-white px-4 py-6 rounded-xl border-2 border-gray-200 shadow-sm">
                <h2 className="text-[18px] text-gray-800 mb-2 font-medium">My Orders</h2>

                {loading ? (
                    <div className="flex justify-center py-5">
                        <Spin size="large" />
                    </div>
                ) : (
                    <div>
                        <div className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {orders &&
                                orders.length > 0 &&
                                orders.map((order) => (
                                    <OrderCard key={order.oid} order={order} />
                                ))}
                        </div>

                        {orders.length === 0 && (
                            <div className="flex justify-center py-5">
                                <Empty description="No Orders Available" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default MyOrders;
