import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2>This is Home</h2>
            <h3>User: {user.displayName} </h3>
            <h5>Email : {user.email}</h5>
        </div>
    );
};

export default Home;