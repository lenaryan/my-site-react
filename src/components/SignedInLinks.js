import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <span>
            <li><NavLink to="/blog/new">New Post</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
        </span>
    )
}

export default SignedInLinks;