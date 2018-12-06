import React from "react";
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper light-green accent-4">
            <div className="container">
                <a className="brand-logo">MetalWebDev</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);