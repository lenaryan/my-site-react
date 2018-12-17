import React, { Component } from "react";
import M from 'materialize-css';

class Works extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {numVisible: 7});
            var elems_box = document.querySelectorAll('.materialboxed');
            var instances_box = M.Materialbox.init(elems_box);
        });
    }

    render() {
        return (
            <div className="container works">
                <h1 className="center">My Works</h1>
                <div className="carousel">
                    <a href="#one!" className="carousel-item materialboxed"><img src={require("../../images/guitar.jpg")} alt="slide one"/></a>
                    <a href="#two!" className="carousel-item materialboxed"><img src={require("../../images/guitar.jpg")} alt="slide two"/></a>
                    <a href="#three!" className="carousel-item materialboxed"><img src={require("../../images/guitar.jpg")} alt="slide three"/></a>
                    <a href="#four!" className="carousel-item materialboxed"><img src={require("../../images/guitar.jpg")} alt="slide four"/></a>
                    <a href="#five!" className="carousel-item materialboxed"><img src={require("../../images/guitar.jpg")} alt="slide five"/></a>
                    <a href="#six!" className="carousel-item materialboxed"><img src={require("../../images/guitar.jpg")} alt="slide six"/></a>
                    <a href="#seven!" className="carousel-item materialboxed"><img src={require("../../images/guitar.jpg")} alt="slide seven"/></a>
                </div>
            </div>
        )
    }
}

export default Works;