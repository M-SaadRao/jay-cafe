import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import { Skeleton, Carousel } from 'antd';
import Container from '../components/Container';

const BluePlate = () => {
    const { allProducts, allCategories } = useSelector(state => state.product);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCat, setFilteredCat] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryRefs = useRef({});

    useEffect(() => {
        if (allCategories) {
            const filteredCategories = allCategories.filter(cat => cat.parent === "14");
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
            setSelectedCategory(filteredCategories[0]?.c_id); // Set default selected category
        }
    }, [allCategories, allProducts]);

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

    const renderCarouselItems = () => {
        const itemsPerSlide = 3; // Number of items per carousel slide
        const categoriesToDisplay = [...filteredCat];

        // Ensure the total categories to display is a multiple of itemsPerSlide
        while (categoriesToDisplay.length % itemsPerSlide !== 0) {
            categoriesToDisplay.push(filteredCat[categoriesToDisplay.length % filteredCat.length]);
        }

        // Build the slides
        const slides = [];
        for (let i = 0; i < Math.ceil(categoriesToDisplay.length / itemsPerSlide); i++) {
            const categoriesInSlide = categoriesToDisplay.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide);
            slides.push(
                <div key={i} className="flex justify-center space-x-2">
                    {categoriesInSlide.map((cat, index) => (
                        <button
                            key={`${cat.c_id}-${index}`} // Include index to ensure unique keys in case of duplicates
                            className={`px-2 py-1 rounded text-xs md:text-sm ${selectedCategory === cat.c_id ? 'bg-primary text-white' : 'bg-gray-200'}`}
                            onClick={() => handleCategoryClick(cat.c_id)}
                        >
                            {cat.c_name}
                        </button>
                    ))}
                </div>
            );
        }

        return slides;
    };


    return (
        <Container>
            <div className='mb-6 sm:mb-12'>
                <h3 className='text-[27px] capitalize text-center md:text-[50px] font-medium my-5 leading-none yellowtail-font'>
                    Blue Plate Specials
                </h3>

                {/* Tab Navigation for larger screens */}

                <div className='categories mt-[50px] sticky top-[76px] z-40 bg-white p-3 rounded-b-xl shadow-md border-t-2 border-secondary'>
                    <div className="hidden md:flex justify-center space-x-2">
                        {filteredCat.map(cat => (
                            <button
                                key={cat.c_id}
                                className={`px-3 shadow-sm py-1 text-lg ${selectedCategory === cat.c_id ? 'bg-primary text-white' : 'bg-gray-200'}`}
                                onClick={() => handleCategoryClick(cat.c_id)}
                            >
                                {cat.c_name}
                            </button>
                        ))}
                    </div>

                    {/* Carousel for smaller screens */}
                    <div className="md:hidden">
                        <Carousel arrows autoplay={false} dots={false}>
                            {renderCarouselItems()}
                        </Carousel>
                    </div>
                </div>

                {/* Display each category and its products */}
                {filteredProducts.map(({ category, products }) => (
                    <div
                        key={category.c_id}
                        className="my-8"
                        ref={el => (categoryRefs.current[category.c_id] = el)}
                    >
                        <h4 className='text-2xl inline-block pb-3 border-b-4 border-primary font-semibold mb-4'>{category.c_name}</h4>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                            {products.length === 0 ? (
                                Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className='h-full'>
                                        <Skeleton active paragraph={{ rows: 4 }} title={{ width: '100%' }} className='h-[400px]' />
                                    </div>
                                ))
                            ) : (
                                products.map((product) => (
                                    <ProductCard isCatProduct={false} key={product.f_id} product={product} />
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default BluePlate;
