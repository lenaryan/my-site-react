import React, { Component } from 'react';

class AdminSignIn extends Component {
    state = {
        login: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="signin">
                    <h1 className="center">Sign In</h1>
                    <div className="input-field">
                        <label htmlFor="login">Login</label>
                        <input className="white-text" type="text" id="login" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input  className="white-text" type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn grey darken-2 z-depth-2 right">Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminSignIn;