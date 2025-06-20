import { Input, Modal, message } from "antd";
import React, { memo, useState } from "react";
import { FaMapMarkerAlt, FaCity  } from "react-icons/fa";
import usePost from "../hooks/usePost";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserAddress } from "../store/user/userSlice";

const AddressModal = ({ isModalOpen, handleCancel }) => {
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const { currentUser } = useSelector(state => state.user);
    const { post, loading } = usePost();
    const dispatch = useDispatch();

    const addNewAddress = async () => {
        try {
            const resp = await post("/addnewaddress.php", { customer_id: currentUser.id, address: address + " | " + city });
            if (resp.success) {
                const latestAddresses = await axios.get(`${process.env.REACT_APP_BASE_URL}/addresse.php?cid=${currentUser.id}&_=${new Date().getTime()}`);
                dispatch(setUserAddress(latestAddresses.data));
                message.success(resp.message);
                handleCancel();
                setAddress(null);
            } else {
                message.error("Error While Adding Address");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal
            title="Add New Address"
            open={isModalOpen}
            onOk={addNewAddress}
            onCancel={handleCancel}
            okText="Add New"
            confirmLoading={loading}
        >

            <div className="my-3">
                <Input
                    size="large"
                    placeholder="Your City"
                    className="p-3 border-secondary"
                    prefix={<FaCity className="mr-2" />}
                    autoComplete="off"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className="my-3">
                <Input
                    size="large"
                    placeholder="Enter Your Shipping Address"
                    className="p-3 border-secondary"
                    prefix={<FaMapMarkerAlt className="mr-2" />}
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
        </Modal>
    );
};

export default memo(AddressModal);
