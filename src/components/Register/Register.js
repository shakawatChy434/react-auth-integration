import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form >
                <input type="email" />
                <br /> <br />
                <input type="password" />
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Register;