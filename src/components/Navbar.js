import React, { Component } from "react";
import {Link, NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import M from 'materialize-css';
import { connect } from 'react-redux';

class Navbar extends Component {
    componentDidMount() {
        //document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        //});
    }

    render() {
        const { auth } = this.props;
        return (
            <header>
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <Link to="/" className="brand-logo">MetalWebDev</Link>
                        <a href="" data-target="mobile-menu" className="sidenav-trigger">
                            <span className="material-icons light-green-text">menu</span>
                        </a>
                        <ul className="main-nav right hide-on-med-and-down">
                            <li><NavLink to="/works">Works</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/about-me">About Me</NavLink></li>
                            {auth.uid && <SignedInLinks />}
                            <li><a className="btn-floating green" href="https://vk.com/lena_ryan" target="_blank"><span className="fab fa-vk"></span></a></li>
                            <li><a className="btn-floating green" style={{margin:0}} href="https://www.instagram.com/russian_plazma_drink" target="_blank"><span className="fab fa-instagram"></span></a></li>
                            <li><a className="btn-floating green" href="https://twitter.com/metalwebdev" target="_blank"><span className="fab fa-twitter"></span></a></li>
                        </ul>
                    </div>

                    <ul className="sidenav grey darken-1" id="mobile-menu">
                        <li><NavLink to="/works">Works</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/about-me">About Me</NavLink></li>
                        <SignedInLinks />
                        <li><a className="social-mob" href="https://vk.com/lena_ryan" target="_blank">
                                <span className="fab fa-vk light-green-text text-accent-3"></span>
                            </a>
                            <a className="social-mob" href="https://www.instagram.com/russian_plazma_drink" target="_blank">
                                <span className="fab fa-instagram light-green-text text-accent-3"></span>
                            </a>
                            <a className="social-mob" href="https://twitter.com/metalwebdev" target="_blank">
                                <span className="fab fa-twitter light-green-text text-accent-3"></span>
                            </a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);