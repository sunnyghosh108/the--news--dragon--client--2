import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit natus, explicabo vero officia dolorem libero animi odit? Unde, laborum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit natus, explicabo vero officia dolorem libero animi odit? Unde, laborum!</p>
            <p>Go back to<Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;