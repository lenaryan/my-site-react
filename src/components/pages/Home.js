import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container home valign-wrapper">
                <h1 className="center">Lena Ryan</h1>
                <h4 className="center">
                    <span className="light-green-text text-accent-1">Frontend </span>
                    <span className="light-green-text text-accent-2">web </span>
                    <span className="light-green-text text-accent-3">dev & </span>
                    <span className="light-green-text text-accent-4">musician</span></h4>
            </div>
        )
    }
}

export default Home;