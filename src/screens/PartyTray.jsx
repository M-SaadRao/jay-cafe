import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, DatePicker, TimePicker, Skeleton, Form } from 'antd';
import ProductCard from '../components/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Container from '../components/Container';
import { setPartPreBooking } from '../store/cart/cartSlice';
import { FaEdit } from 'react-icons/fa';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const PartyTray = () => {
    const dispatch = useDispatch();
    const { allProducts, allCategories } = useSelector(state => state.product);
    const { partyPreBooking } = useSelector(state => state.cart);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCat, setFilteredCat] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalVisible, setModalVisible] = useState(!partyPreBooking);
    const categoryRefs = useRef({});

    const [form] = Form.useForm();
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (allCategories) {
            const filteredCategories = allCategories.filter(cat => cat.parent === "1");
            setFilteredCat(filteredCategories);

            const categoryIds = filteredCategories.map(cat => cat.c_id);
            const productsByCategory = allProducts.filter(product =>
                categoryIds.includes(product.cid)
            );

            const groupedProducts = categoryIds.map(categoryId => ({
                category: filteredCategories.find(cat => cat.c_id === categoryId),
                products: productsByCategory.filter(product => product.cid === categoryId)
            }));

            setFilteredProducts(groupedProducts);
            setSelectedCategory(filteredCategories[0]?.c_id);
        }
    }, [allCategories, allProducts]);

    useEffect(() => {
        if (partyPreBooking) {
            const validDate = dayjs(partyPreBooking.date).tz('America/Chicago'); // Assuming GMT-6 (Central Time)
            const validTime = dayjs(partyPreBooking.time).tz('America/Chicago'); // Adjust if needed

            if (validDate.isValid() && validTime.isValid()) {
                form.setFieldsValue({
                    date: validDate,
                    time: validTime
                });
            }
        }
    }, [partyPreBooking, form]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        const element = categoryRefs.current[categoryId];
        if (element) {
            const offset = 170; // Adjust this value based on your fixed header height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    const handleFormChange = () => {
        const values = form.getFieldsValue();
        setIsFormValid(values.date && values.time);
    };

    const handleConfirm = () => {
        const values = form.getFieldsValue();
        if (values.date && values.time) {
            dispatch(setPartPreBooking({ date: values.date, time: values.time }));
            setModalVisible(false);
        } else {
            Modal.error({
                title: 'Missing Details',
                content: 'Please select both a date and time to start your order.',
            });
        }
    };

    // Format pickup time as '9 AM', '12 PM', etc.
    const formatPickupTime = (date, time) => {
        if (!date || !time) return "";
        const formattedDate = dayjs(date).locale('en').format('ddd, DD/MM');
        const formattedTime = dayjs(time).tz('America/Chicago').format('h:mm A'); // Format time in 12-hour format (AM/PM)
        return `Pickup ${formattedDate}, ${formattedTime} GMT-6`;
    };

    return (
        <Container>
            <Modal
                title="Find a time for your catering order"
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={[
                    <Button
                        key="confirm"
                        type="primary"
                        onClick={handleConfirm}
                        disabled={!isFormValid}
                    >
                        Start order
                    </Button>,
                ]}
            >
                <p className='mb-4'>Fill out these details to be able to add items to your cart, or browse the menu and enter details later!</p>

                <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
                    <Form.Item name="date" label="Select Date" rules={[{ required: true, message: 'Please select a date!' }]}>
                        <DatePicker
                            format="YYYY-MM-DD"
                            style={{ width: '100%' }}
                            placeholder="Select Date"
                        />
                    </Form.Item>

                    <Form.Item name="time" label="Select Time" rules={[{ required: true, message: 'Please select a time!' }]}>
                        <TimePicker
                            format="HH:mm"
                            style={{ width: '100%' }}
                            placeholder="Select Time"
                        />
                    </Form.Item>
                </Form>
            </Modal>

            <div className='mb-6 sm:mb-12'>
                <h3 className='text-[27px] capitalize text-center md:text-[50px] my-5 leading-none yellowtail-font'>
                    Party Tray
                </h3>

                {partyPreBooking &&
                    <div className="flex justify-center">
                        <div onClick={() => setModalVisible(true)} className='px-4 py-2 bg-gray-300 rounded-full text-black font-medium text-lg mt-4 flex gap-4 items-center cursor-pointer'>
                            <span>{formatPickupTime(partyPreBooking.date, partyPreBooking.time)}</span> <FaEdit />
                        </div>
                    </div>}

                <div className='categories mt-[50px] sticky top-[76px] z-40 bg-white p-3 rounded-b-xl shadow-md border-t-2 border-secondary'>
                    <div className="relative w-full mb-2 overflow-x-auto">
                        <Swiper slidesPerView="auto" spaceBetween={10} freeMode className="category-slider">
                            {filteredCat.map((category, index) => (
                                <SwiperSlide key={category.cid + index} style={{ width: 'auto' }}>
                                    <Button
                                        type={selectedCategory === category.c_id ? 'primary' : 'default'}
                                        onClick={() =>
                                            handleCategoryClick(selectedCategory === category.c_id ? null : category.c_id)
                                        }
                                        className={`whitespace-nowrap ${selectedCategory === category.c_id ? 'bg-primary text-white' : 'bg-gray-100'}`}
                                        size='large'
                                    >
                                        {category.c_name}
                                    </Button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {filteredProducts.map(({ category, products }) => (
                    <div key={category.c_id} className="my-8" ref={el => (categoryRefs.current[category.c_id] = el)}>
                        <h4 className='text-2xl inline-block pb-3 border-b-4 border-primary font-semibold mb-4 capitalize'>{category.c_name}</h4>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                            {products.length === 0 ? (
                                Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className='h-full'>
                                        <Skeleton active paragraph={{ rows: 4 }} title={{ width: '100%' }} className='h-[400px]' />
                                    </div>
                                ))
                            ) : (
                                products.map((product) => (
                                    <ProductCard key={product.f_id} product={product} isPartyTray={true} />
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default PartyTray;