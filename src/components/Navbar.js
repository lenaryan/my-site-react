import React from "react";
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper light-green accent-4">
            <div className="container">
                <Link to="/" className="brand-logo">MetalWebDev</Link>
                <ul className="right">
                    <li><NavLink to="/">Works</NavLink></li>
                    <li><NavLink to="/">Blog</NavLink></li>
                    <li><NavLink to="/">My Arts</NavLink></li>
                    <li><NavLink to="/">About Me</NavLink></li>
                    <li><a className="btn-floating green" href="vk.com/lena_ryan"><i class="fab fa-vk"></i></a></li>
                    <li><a className="btn-floating green" style={{margin:0}} href="www.instagram.com/russian_plazma_drink"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);