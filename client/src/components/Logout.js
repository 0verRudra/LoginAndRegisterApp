import React, { useEffect } from 'react';  // Import useEffect from React
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove token from localStorage
        localStorage.removeItem('token');
        alert('You have been logged out successfully!');
        // Redirect to login
        navigate('/login');
    }, [navigate]);

    return null;  // No UI needed for logout
};

export default Logout;
