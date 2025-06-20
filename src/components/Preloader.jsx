import { Spin } from 'antd';

const Preloader = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Spin size="large" />
        </div>
    );
};

export default Preloader;
