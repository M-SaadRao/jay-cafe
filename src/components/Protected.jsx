import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Protected = ({ component }) => {
    const currentUser = useSelector((state) => state.user.currentUser);
    return currentUser ? component : <Navigate to="/" />;
};

export default Protected;
