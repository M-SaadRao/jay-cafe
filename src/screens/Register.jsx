import React from 'react';
import { Form, Input, Button, message } from 'antd';
import authBg from "../assets/images/auth-bg.jpg";
import logo from "../assets/images/final-logo.png";
import { Link, useNavigate } from 'react-router-dom';
import usePost from "../hooks/usePost";
import { useForm } from 'antd/es/form/Form';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setIsGuest } from '../store/user/userSlice';

const Register = () => {

    const { post, loading } = usePost();
    const [form] = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const resp = await post("/register.php", values);
            if (resp.success === true) {
                const loginResp = await post("/customerlogin.php", { email: values.email, password: values.password });
                message.success(resp.message);
                form.resetFields();
                dispatch(setCurrentUser(loginResp.user));
                dispatch(setIsGuest(false));
                navigate("/");
            } else {
                message.error("Email Already Registered");
                form.resetFields();
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle error appropriately, e.g., display a notification
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="relative hidden md:block md:w-1/2">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${authBg})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-[0.7]"></div>
                </div>
            </div>

            <div className="w-full md:w-1/2 p-8 ">
                <img src={logo} alt="jaycafe" className='w-[100px]' />

                <div className="flex justify-center items-center h-[80vh] max-md:mt-[40px]">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold pb-2 text-primary">Register</h2>
                        <hr className='h-[3px] w-[90px] bg-secondary mb-8' />
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                            layout="vertical"
                            form={form} // Ensure form object is passed correctly
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Form.Item
                                    name="fname"
                                    rules={[{ required: true, message: 'Please input your first Name' }]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="First Name"
                                        className='p-3 border-secondary'
                                        autoComplete='off'
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="lname"
                                    rules={[{ required: true, message: 'Please input your last Name' }]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="Last Name"
                                        className='p-3 border-secondary'
                                        autoComplete='off'
                                    />
                                </Form.Item>
                            </div>

                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone no!' }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Phone No"
                                    className='p-3 border-secondary'
                                    autoComplete='off'
                                    max={11}
                                    maxLength={11}
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Email"
                                    className='p-3 border-secondary'
                                    autoComplete='off'
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    size="large"
                                    className='p-3 border-secondary'
                                    placeholder="Password"
                                    autoComplete='off'
                                    minLength={8}
                                />
                            </Form.Item>

                            <div className="flex justify-end">
                                <Link to="/login" className='mb-4 text-sm text-primary font-medium' >Already Have Account? Login Now</Link>
                            </div>
                            <Form.Item>
                                <Button loading={loading} disabled={loading} type="primary" size='large' htmlType="submit" className="w-full text-lg py-2 mt-3">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
