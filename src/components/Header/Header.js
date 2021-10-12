import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFriebase';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {user?.email && <button>Log Out</button>}
        </div>
    );
};

export default Header;