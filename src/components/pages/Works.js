import React, { Component } from "react";
import M from 'materialize-css';
import CMSWorks from "./CMSWorks";
import ReactWorks from "./ReactWorks";

class Works extends Component {
    componentDidMount() {
        //document.addEventListener('DOMContentLoaded', function() {
            var tabs = document.querySelectorAll('.tabs');
            var instance = M.Tabs.init(tabs, {
                swipable: true
            });
        //});
    }

    render() {
        return (
            <main className="container works">
                <h1 className="center">My Works</h1>

                <div className="row">
                    <div className="col s12 m6">
                        <ul className="tabs transparent">
                            <li className="tab col s6"><a className="active light-green-text" href="#cms-works">CMS Works</a></li>
                            <li className="tab col s6"><a className="light-green-text" href="#react-works">React Works</a></li>
                        </ul>
                    </div>
                    <div id="cms-works" className="col s12"><CMSWorks /></div>
                    <div id="react-works" className="col s12"><ReactWorks /></div>
                </div>
    
            </main>
        )
    }
}

export default Works;