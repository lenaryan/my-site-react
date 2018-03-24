import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Home extends Component {
    rotateHamburger() {
        document.getElementById('toggle-label').classList.toggle('rotate');
        for (let i=0; i<document.getElementById('nav').children.length;i++)
        document.getElementById('nav').children[i].classList.toggle('appear');
    }

  render() {
    const DarkGreen = styled.span`
        color: #0a995c;
    `;
    
    const LightGreen = styled.span`
        color: #10ff12;
    `;

    const Pink = styled.span`
        color: #f98ff7;
    `;

    const Violet = styled.span`
        color: #a946cc;
    `;

    return (
      <div className="home">
        <div className="banner">
            <div className="overlay">
                <span className="logo">METALWEBDEV</span>
                <h1>LENA RYAN</h1>
                <p><DarkGreen>Frontend</DarkGreen> 
                <LightGreen> web</LightGreen> 
                <Pink> dev</Pink> &amp; 
                <Violet> musician</Violet></p>
            </div>
        </div> 
        <div id="toggle-label" onClick={this.rotateHamburger.bind(this)}><span id="toggle"></span></div>
        <ul id="nav">
            <li><a href="#works"><span>Works</span></a></li>
            <li><a href="#arts"><span>Arts</span></a></li>
            <li><a href="#blog"><span>Blog</span></a></li>
            <li><a href="#me"><span>It's Me</span></a></li>
        </ul>
        <div className="wrapper">
            <div className="block-info">
                <div className="color" id="works">Works</div>
                <div className="text">All websites I have created or helped to create by this time.</div>
                <Link to='works' class="works">Take a look</Link>
            </div>
            <div className="block-info">
                <div className="color" id="arts">Arts</div>
                <div className="text">I love art. I love music. Sometimes I draw pics. But mostly all my art is music - singing, growling and playing in bands.</div>
                <Link to='arts' class="arts">Take a look</Link>
            </div>
            <div className="block-info">
                <div className="color" id="blog">Blog</div>
                <div className="text">Once a week I try to write a blog post about things related to coding, web development or metal music.</div>
                <Link to='blog' class="blog">Take a look</Link>
            </div>
            <div className="block-info">
                <div className="color" id="me">It's Me</div>
                <div className="text">Basically this is my CV and some more details about me.</div>
                <Link to='me' class="me">Take a look</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;