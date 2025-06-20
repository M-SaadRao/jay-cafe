import React, { useState } from 'react';
import { Input, DatePicker, TimePicker, Select, Button, Card, message } from 'antd';
import Container from '../components/Container';
import logo from "../assets/images/final-logo.png";

const { Option } = Select;

const GiftCards = () => {
    const [amount, setAmount] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [senderContact, setSenderContact] = useState('');
    const [senderAddress, setSenderAddress] = useState('');
    const [messageText, setMessageText] = useState('');
    const [sendTo, setSendTo] = useState('');
    const [deliveryType, setDeliveryType] = useState('now');
    const [deliveryDate, setDeliveryDate] = useState(null);
    const [deliveryTime, setDeliveryTime] = useState(null);

    const handleSubmit = async () => {
        const payload = {
            amount,
            recipient: {
                name: recipientName,
                email: recipientEmail,
            },
            sender: {
                email: senderEmail,
                contact: senderContact,
                address: senderAddress,
                message: messageText,
            },
            sendTo,
            delivery: {
                type: deliveryType,
                date: deliveryDate,
                time: deliveryTime,
            },
        };

        try {
            // Example API call
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                message.success('Gift card purchased successfully!');
            } else {
                message.error('Failed to purchase gift card.');
            }
        } catch (error) {
            message.error('An error occurred. Please try again.');
        }
    };

    return (
        <Container>
            <div className='rounded-xl bg-white shadow-md p-6 max-w-4xl mx-auto'>
                <h2 className="text-5xl mb-4 yellowtail-font text-primary">Give a Gift Card</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Form Section */}
                    <div>
                        {/* Amount Section */}
                        <h3 className="text-lg font-medium mb-2">Choose Amount</h3>
                        <label className="block mb-1 text-sm text-gray-500">Enter Amount ($25 - $250)</label>
                        <Input
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"
                            min={25}
                            max={250}
                            className="mb-4 w-full"
                        />

                        {/* Recipient Section */}
                        <h3 className="text-lg font-medium mb-2">To</h3>
                        <Input
                            placeholder="Recipient Name"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                            className="mb-2 w-full"
                        />
                        <Input
                            placeholder="Recipient Email"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                            className="mb-4 w-full"
                        />

                        {/* Sender Section */}
                        <h3 className="text-lg font-medium mb-2">From</h3>
                        <Input
                            placeholder="Your Email"
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            className="mb-2 w-full"
                        />
                        <Input
                            placeholder="Contact Number"
                            value={senderContact}
                            onChange={(e) => setSenderContact(e.target.value)}
                            className="mb-2 w-full"
                        />
                        <Input
                            placeholder="Address"
                            value={senderAddress}
                            onChange={(e) => setSenderAddress(e.target.value)}
                            className="mb-2 w-full"
                        />
                        <Input.TextArea
                            placeholder="Message"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            rows={3}
                            className="mb-4 w-full"
                        />

                        {/* Schedule Delivery Section */}
                        <h3 className="text-lg font-medium mb-2">Schedule Delivery</h3>
                        <Input
                            placeholder="Send To (Email)"
                            value={sendTo}
                            onChange={(e) => setSendTo(e.target.value)}
                            className="mb-2 w-full"
                        />
                        <Select
                            value={deliveryType}
                            onChange={(value) => setDeliveryType(value)}
                            className="mb-2 w-full"
                        >
                            <Option value="now">Now</Option>
                            <Option value="future">Future Date</Option>
                        </Select>
                        {deliveryType === 'future' && (
                            <div className="flex space-x-2 mb-4">
                                <DatePicker
                                    onChange={(date) => setDeliveryDate(date)}
                                    className="w-1/2"
                                />
                                <TimePicker
                                    onChange={(time) => setDeliveryTime(time)}
                                    format="HH:mm"
                                    className="w-1/2"
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <Button
                            size='large'
                            type="primary"
                            block
                            className="mt-6 bg-[#1D6CB6] hover:bg-blue-700"
                            onClick={handleSubmit}
                        >
                            Purchase Gift Card
                        </Button>
                    </div>

                    {/* Preview Card */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-secondary">Card Preview</h3>
                        <Card className="bg-primary text-white shadow-lg rounded-xl p-4 relative overflow-hidden">
                            {/* Shine effect using a pseudo-element */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-white to-blue-500 opacity-20 animate-shine"></div>

                            {/* Company Logo */}
                            <img
                                src={logo}
                                alt="Company Logo"
                                className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-white p-1"
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <p className="text-lg font-semibold mb-2">The Jay Cafe</p>
                                <p className="text-sm mb-1">To: {recipientName || 'Recipient'}</p>
                                <p className="text-sm mb-1">Email: {recipientEmail || 'Email'}</p>
                                <p className="text-sm mb-1">From: {senderEmail || 'Sender'}</p>
                                <p className="text-lg text-right font-medium mb-1">Amount: ${amount || '0.00'}</p>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='font-medium'>Note: <span className='font-normal'>Gift Cards are not redeemable for cash except as required by applicable law and then only to the extent required by applicable law.</span></h3>
                </div>
            </div>
        </Container>
    );
};

export default GiftCards;
