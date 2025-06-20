import React from 'react';
import { Collapse, ConfigProvider } from 'antd';

const FAQ = () => {
    const items = [
        {
            key: '1',
            label: 'What types of food do you offer?',
            children: <p>We offer a wide variety of delicious fast food, including pizza, paratha, burgers, and much more.</p>,
        },
        {
            key: '2',
            label: 'How can I place an order?',
            children: <p>You can easily place an order through our website or mobile app. Just browse our menu, add items to your cart, and checkout.</p>,
        },
        {
            key: '3',
            label: 'Do you offer delivery services?',
            children: <p>Yes, we offer fast and reliable delivery services right to your doorstep. You can track your order in real-time.</p>,
        },
        {
            key: '4',
            label: 'What payment methods do you accept?',
            children: <p>We accept various payment methods including cash on delivery.</p>,
        },
    ];

    return (
        <div className="w-full mx-auto mt-8 p-5 bg-primary">
            <h2 className='text-center text-white text-3xl font-bold'>Finest Taste Ever</h2>
            <ConfigProvider
                theme={{
                    token: {
                        fontSize: 18
                    },
                }}
            >
                <Collapse accordion className='bg-[#F8F9FA] w-[90%] mx-auto my-4' items={items} />
            </ConfigProvider>
        </div>
    );
}

export default FAQ;
