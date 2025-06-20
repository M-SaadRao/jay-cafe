import React from 'react';
import logo from "../assets/images/final-logo.png";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Container from './Container';
import { FaLocationArrow } from 'react-icons/fa6';
import { Button } from 'antd';

const Footer = () => {
    return (
        <Container>
            <div className="mt-[50px]">
                <iframe
                    src="https://widget.tagembed.com/2135385"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                    title="tagembed-widget"
                />

            </div>
            <footer className="bg-white pb-8 pt-12 rounded-xl border-2 border-gray-200 shadow-sm max-md:mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-4">
                        {/* Left Column: Logo and Text */}
                        <div className="text-center sm:text-left">
                            <Link to="/">
                                <img src={logo} alt="boltwireless" className="w-[130px] mx-auto sm:mx-0" />
                            </Link>
                            <p className="mt-4 text-lg px-4 sm:px-0 text-gray-700">
                                The Plaster Family has been in the restaurant business for 33 years. Out of frustration, we started The Jay Café.
                            </p>
                        </div>

                        {/*  Needville Location */}
                        <div className="text-center sm:text-left mt-5 sm:pl-5">
                            <h2 className="text-[40px] font-medium mb-4 yellowtail-font">Needville</h2>
                            <p className="text-gray-700 text-[16px]">
                                Full Service: <br />
                                <span><span>16634 TX-36, Needville,<br /> TX 77461</span></span>
                            </p>
                            <Button
                                type='primary'
                                // size='large'
                                className='font-medium leading-none mt-2 mb-3'
                                size='small'
                                onClick={() => { window.open('https://g.co/kgs/8gv2n8F', '_blank'); }}
                            >
                                <span>View On Map</span>
                                <FaLocationArrow />
                            </Button>
                            <p className="mt-2">Phone: <Link to="tel:+19797937900" className='font-medium'>(979) 793-7900</Link></p>
                            <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-gray-500">
                                <Link to="https://www.facebook.com/thejaycafeneedville/" target='_blank'>
                                    <FaFacebook className="hover:text-primary text-3xl text-secondary" />
                                </Link>
                                <Link to="https://www.instagram.com/jaycafeneedville" target='_blank'>
                                    <FaInstagram className="hover:text-primary text-3xl text-secondary" />
                                </Link>
                            </div>
                        </div>

                        {/* Lake Jackson Location */}
                        <div className="text-center sm:text-left mt-5">
                            <h2 className="text-[40px] font-medium mb-4 yellowtail-font">Lake Jackson</h2>
                            <p className="text-gray-700 text-[16px]">
                                Full Service: <br />
                                <span>145 Oyster Creek 1-A, Lake Jackson, TX 77566</span>
                            </p>
                            <Button
                                type='primary'
                                // size='large'
                                className='font-medium leading-none mt-2 mb-3'
                                size='small'
                                onClick={() => { window.open('https://g.co/kgs/4YQrcv8', '_blank'); }}
                            >
                                <span>View On Map</span>
                                <FaLocationArrow />
                            </Button>
                            {/* <Link className='text-sm flex items-center gap-3 border' to="https://g.co/kgs/4YQrcv8" target='_blank'><FaLocationArrow className='text-lg text-secondary' /> <span>View On Map</span></Link> */}
                            <p className="mt-2">Phone: <Link to="tel:+19792928278" className='font-medium'>(979) 292-8278</Link> </p>
                            <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-gray-500">
                                <Link to="https://www.instagram.com/thejaycafelakejackson" target='_blank'>
                                    <FaFacebook className="hover:text-primary text-3xl text-secondary" />
                                </Link>
                                <Link to="https://www.instagram.com/thejaycafelakejackson" target='_blank'>
                                    <FaInstagram className="hover:text-primary text-3xl text-secondary" />
                                </Link>
                            </div>
                        </div>
                        
                         {/* TangerOutlet Mall */}
                        <div className="text-center sm:text-left mt-5">
                            <h2 className="text-[40px] font-medium mb-4 yellowtail-font">TangerOutlet Mall</h2>
                            <p className="text-gray-700 text-[16px]">
                                Full Service: <br />
                                <span>Texas City Tanger Outlets Mall Suite 353 </span>
                            </p>
                            <Button
                                type='primary'
                                // size='large'
                                className='font-medium leading-none mt-2 mb-3'
                                size='small'
                                onClick={() => { window.open('https://maps.app.goo.gl/gcTUYVYun26Ww9QG9', '_blank'); }}
                            >
                                <span>View On Map</span>
                                <FaLocationArrow />
                            </Button>
                            {/* <Link className='text-sm flex items-center gap-3 border' to="https://g.co/kgs/4YQrcv8" target='_blank'><FaLocationArrow className='text-lg text-secondary' /> <span>View On Map</span></Link> */}
                            <p className="mt-2">Phone: <Link to="tel:+12819898889" className='font-medium'>(281) 989-8889</Link> </p>
                            <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-gray-500">
                                <Link to="https://www.instagram.com/thejaycafelakejackson" target='_blank'>
                                    <FaFacebook className="hover:text-primary text-3xl text-secondary" />
                                </Link>
                                <Link to="https://www.instagram.com/thejaycafelakejackson" target='_blank'>
                                    <FaInstagram className="hover:text-primary text-3xl text-secondary" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='text-center sm:text-right font-medium text-[16px] mt-5'>
                        Open Every Day: 10 AM - 9 PM
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8 h-1 bg-primary" />

                    {/* Footer Bottom Text */}
                    <div className="text-center">
                        <span className="block  text-gray-500 dark:text-gray-400">
                            &copy; {new Date().getFullYear()} <Link to="/" className="hover:underline text-primary font-medium">jaycafe.com</Link> | Powered by <Link target="_blank" to="https://logicracks.co.uk" className="font-medium hover:underline text-primary">Logicracks</Link>
                        </span>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;
