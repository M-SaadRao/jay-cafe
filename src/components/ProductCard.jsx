import React, { memo, useState, useEffect } from 'react';
import { Button, Modal, Radio } from 'antd';
import ProductModal from './ProductModal';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSelectedOrderType } from '../store/user/userSlice';
import logo from "../assets/images/final-logo.png";

const ProductCard = ({ product, categoryId, isCatProduct, isPartyTray }) => {
    // Support both string and number comparisons
    const catId = String(categoryId || product.c_id || product.cid);
    const isExtraAddOn = catId === "12";

    // Manage loading: skip for extra add-on
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (isExtraAddOn) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [isExtraAddOn, product.f_image]);

    const [modalVisible, setModalVisible] = useState(false);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [deliveryOption, setDeliveryOption] = useState('');
    const { userSelectedOrderType } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const showConfirmationModal = () => {
        if (userSelectedOrderType !== "pickup") {
            setConfirmationModalVisible(true);
        } else {
            setModalVisible(true);
        }
    };

    const hideConfirmationModal = () => {
        setConfirmationModalVisible(false);
        setDeliveryOption('');
    };

    const handleDeliveryOptionChange = (e) => {
        const selectedOption = e.target.value;
        setDeliveryOption(selectedOption);

        if (selectedOption === 'delivery') {
            window.open('https://order.online/business/the-jay-cafe-11170940', '_blank');
            dispatch(setUserSelectedOrderType("delivery"));
            hideConfirmationModal();
        } else {
            hideConfirmationModal();
            setModalVisible(true);
            dispatch(setUserSelectedOrderType("pickup"));
        }
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div>
            <div
                onClick={showConfirmationModal}
                className="p-1 sm:p-2 cursor-pointer bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:border-primary duration-300 flex flex-col justify-between h-full"
            >
                {/* Loading skeleton for non-extra add-on */}
                {!isExtraAddOn && loading && (
                    <div className="animate-pulse h-48 bg-gray-200 rounded-xl mb-2" />
                )}

                {/* Image for non-extra add-on */}
                {!isExtraAddOn && (
                    <img
                        src={product.f_image}
                        alt="productImg"
                        className={`w-full rounded-xl ${loading ? 'hidden' : 'block'}`}
                        onLoad={handleImageLoad}
                    />
                )}

                <div className="p-1 sm:p-2 flex flex-col justify-between h-full">
                    <div className="text-center">
                        <p className="my-2 text-[14px] sm:text-[18px] playFont text-gray-800">
                            {product.f_name}
                        </p>
                        <p className="my-2 text-[12px] sm:text-[12px] leading-[1.4] text-gray-800">
                            {product.f_details}
                        </p>
                    </div>
                    <div className="text-center mt-auto">
                        {!isPartyTray && (
                            <p className="playFont text-primary p-0 my-1 text-[18px] relative">
                                {product.f_price !== "0" && `$${product.f_price}`}
                                {product.old_price !== "0" && (
                                    <del className="text-gray-800 text-[13px] absolute top-0 right-0 md:right-6 lg:right-12">
                                        {product.old_price}
                                    </del>
                                )}
                            </p>
                        )}
                        <Button type="primary" className="rounded-full my-1 playFont" onClick={showConfirmationModal}>
                            View Details
                        </Button>
                    </div>
                </div>
            </div>

            <Modal
                open={confirmationModalVisible}
                onCancel={hideConfirmationModal}
                closeIcon={<CloseOutlined />}
                footer={null}
            >
                <div>
                    <div className="mb-4">
                        <img src={logo} alt="Logo" className="mx-auto w-[70px]" />
                    </div>
                    <h2 className="text-xl font-medium my-4 text-center">
                        Select Order Type
                    </h2>
                </div>
                <div className="flex justify-center">
                    <Radio.Group size="large" onChange={handleDeliveryOptionChange} value={deliveryOption}>
                        <Radio.Button value="selfPickup" className="mx-1 bg-primary text-white font-medium">
                            Pickup
                        </Radio.Button>
                        <Radio.Button value="delivery" className="mx-1">Delivery</Radio.Button>
                    </Radio.Group>
                </div>
            </Modal>

            <ProductModal
                open={modalVisible}
                product={product}
                hideModal={() => setModalVisible(false)}
                isCatProduct={isCatProduct}
                isPartyTray={isPartyTray}
            />
        </div>
    );
};

export default memo(ProductCard);
