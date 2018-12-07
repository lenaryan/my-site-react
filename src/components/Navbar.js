import React, { Component } from "react";
import {Link, NavLink, withRouter} from 'react-router-dom';
import M from 'materialize-css';

class Navbar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });
    }

    render() {
        return (
            <div>
                <nav className="nav-wrapper light-green accent-4">
                    <div className="container">
                        <Link to="/" className="brand-logo">MetalWebDev</Link>
                        <a href="#" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Works</NavLink></li>
                            <li><NavLink to="/">Blog</NavLink></li>
                            <li><NavLink to="/">My Arts</NavLink></li>
                            <li><NavLink to="/">About Me</NavLink></li>
                            <li><a className="btn-floating green" href="vk.com/lena_ryan"><i className="fab fa-vk"></i></a></li>
                            <li><a className="btn-floating green" style={{margin:0}} href="www.instagram.com/russian_plazma_drink"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-menu">
                    <li><NavLink to="/">Works</NavLink></li>
                    <li><NavLink to="/">Blog</NavLink></li>
                    <li><NavLink to="/">My Arts</NavLink></li>
                    <li><NavLink to="/">About Me</NavLink></li>
                    <li><a className="social-mob" href="vk.com/lena_ryan"><i className="fab fa-vk"></i></a><a className="social-mob" href="www.instagram.com/russian_plazma_drink"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Navbar);