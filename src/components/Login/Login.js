import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { singInUsinGoogle, /* singInUsingGithub */ } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singInUsinGoogle}>Google Login</button> <br /> <br />
            {/* <button onClick={singInUsingGithub} >GitHub Login</button> */}
            <br /> <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;