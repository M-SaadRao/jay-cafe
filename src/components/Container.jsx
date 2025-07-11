import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
            {children}
        </div>
    );
};

export default Container;
