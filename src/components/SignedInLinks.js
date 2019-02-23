import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <>
            <li><NavLink to="/blog/new">New Post</NavLink></li>
            <li><a href="" onClick={props.signOut}>Log Out</a></li>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);