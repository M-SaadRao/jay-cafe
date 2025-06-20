import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import authBg from "../assets/images/auth-bg.jpg";
import logo from "../assets/images/final-logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setIsGuest } from '../store/user/userSlice';
import usePost from '../hooks/usePost';

const Login = () => {


    const [form] = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { post, loading } = usePost();

    const onFinish = async (values) => {
        try {
            const resp = await post("/customerlogin.php", values);
            if (resp.success === true) {
                message.success("Loged In Successfully");
                form.resetFields();
                dispatch(setCurrentUser(resp.user));
                dispatch(setIsGuest(false));
                navigate("/");
            } else {
                message.error(resp.error);
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
                <img src={logo} alt="britania" className='w-[100px]' />

                <div className="flex justify-center items-center h-[80vh] max-md:mt-[40px]">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold pb-2 text-primary">Login</h2>
                        <hr className='h-[3px] w-[90px] bg-secondary mb-8' />
                        <Form
                            form={form}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                            layout="vertical"
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Email"
                                    className='p-3 border-secondary'
                                    prefix={<UserOutlined className='mr-2' />}
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
                                    prefix={<LockOutlined className='mr-2' />}
                                />
                            </Form.Item>
                            <div className="flex justify-end">
                                <Link to="/register" className='block mb-4 text-sm text-primary font-medium' >Don't have Account Register Now</Link>
                            </div>

                            <Form.Item>
                                <Button loading={loading} disabled={loading} type="primary" size='large' htmlType="submit" className="w-full text-lg py-2 mt-3">
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
