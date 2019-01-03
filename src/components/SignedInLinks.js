import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <li><NavLink to="/blog/new">New Post</NavLink></li>
    )
}

export default SignedInLinks;