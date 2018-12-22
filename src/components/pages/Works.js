import React, { Component } from "react";
import M from 'materialize-css';

class Works extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems);
        });
    }

    render() {
        return (
            <div className="container works">
                <h1 className="center">My Works</h1>
                <div className="works-pics">
                    <img src={require("../../images/guitar.jpg")} alt="work one" className="materialboxed" />
                    <img src={require("../../images/guitar.jpg")} alt="work two" className="materialboxed" />
                    <img src={require("../../images/guitar.jpg")} alt="work three" className="materialboxed" />
                    <img src={require("../../images/guitar.jpg")} alt="work four" className="materialboxed" />
                    <img src={require("../../images/guitar.jpg")} alt="work five" className="materialboxed" />
                    <img src={require("../../images/guitar.jpg")} alt="work six" className="materialboxed" />
                    <img src={require("../../images/guitar.jpg")} alt="work seven" className="materialboxed" />
                </div>
            </div>
        )
    }
}

export default Works;