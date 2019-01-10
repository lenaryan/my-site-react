import React, { Component } from "react";
import {Link, NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import M from 'materialize-css';
import { connect } from 'react-redux';

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
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link to="/" className="brand-logo">MetalWebDev</Link>
                        <a href="#" data-target="mobile-menu" className="sidenav-trigger">
                            <i className="material-icons light-green-text">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/works">Works</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/about-me">About Me</NavLink></li>
                            <SignedInLinks />
                            <li><a className="btn-floating green" href="vk.com/lena_ryan"><i className="fab fa-vk"></i></a></li>
                            <li><a className="btn-floating green" style={{margin:0}} href="www.instagram.com/russian_plazma_drink"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav grey darken-1" id="mobile-menu">
                    <li><NavLink to="/works">Works</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about-me">About Me</NavLink></li>
                    <SignedInLinks />
                    <li><a className="social-mob" href="vk.com/lena_ryan">
                            <i className="fab fa-vk light-green-text text-accent-3"></i>
                        </a>
                        <a className="social-mob" href="www.instagram.com/russian_plazma_drink">
                            <i className="fab fa-instagram light-green-text text-accent-3"></i>
                        </a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);