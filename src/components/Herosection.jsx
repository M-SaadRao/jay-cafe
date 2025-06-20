import React from 'react';
import { Carousel } from 'antd';
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg"; // Ensure to import additional slides if needed
import slide3 from "../assets/images/slide3.jpg"; // Ensure to import additional slides if needed

const App = () => {


    return (
        <div className='hero-section'>
            <Carousel autoplay draggable>
                <img src={slide1} alt="slide1" className='w-full' />
                <img src={slide2} alt="slide2" className='w-full' />
                <img src={slide3} alt="slide3" className='w-full' />
            </Carousel>
        </div>
    );
};

export default App;
