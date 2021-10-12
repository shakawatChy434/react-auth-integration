import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFriebase';

const Login = () => {
    const { singInUsinGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singInUsinGoogle}>Google Login</button>
            <br /> <br />
           
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;