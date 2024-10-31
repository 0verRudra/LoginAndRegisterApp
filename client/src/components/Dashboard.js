import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the token exists in localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            // If no token, redirect to login
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            {/* Add a logout link */}
            <Link to="/logout">Logout</Link>
        </div>
    );
};

export default Dashboard;
