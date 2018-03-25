import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import GreenPick from '../images/dark-green.png';
import LimePick from '../images/lime.png';
import PinkPick from '../images/pink.png';
import VioletPick from '../images/violet.png';

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

    const Overlay = styled.div`
        height: 101vh;
        color: white; 
        text-align: center;

        > h1 {
            font-size: 50pt;
            margin-top: 25vh;
            letter-spacing: 4px;
            margin-bottom: 0;
        }

        > p {
            font-size: 19pt;
            letter-spacing: 1px;
            margin: 0;
        }
    `;

    const Logo = styled.span`
        font-size: 19pt;
        display: inline-block;
        margin-top: 5vh;
        letter-spacing: 4px;
    `;

    const NavWorks = styled.li`
        transition-duration: 0.1s;

        > a {
            background: url(${GreenPick}) no-repeat center;
        }
    `;

    const NavArts = styled.li`
        transition-duration: 0.25s;

        > a {
            background: url(${LimePick}) no-repeat center;
        }
    `;

    const NavBlog = styled.li`
        transition-duration: 0.5s;

        > a {
            background: url(${PinkPick}) no-repeat center
        }
    `;

    const NavMe = styled.li`
        transition-duration: 0.75s;

        > a {
            background: url(${VioletPick}) no-repeat center;
        }
    `;

    return (
      <div className="home">
        <Overlay>
            <Logo>METALWEBDEV</Logo>
            <h1>LENA RYAN</h1>
            <p><DarkGreen>Frontend</DarkGreen> 
            <LightGreen> web</LightGreen> 
            <Pink> dev</Pink> &amp; 
            <Violet> musician</Violet></p>
        </Overlay>
        <div id="toggle-label" onClick={this.rotateHamburger.bind(this)}><span id="toggle"></span></div>
        <ul id="nav">
            <NavWorks><a href="#works"><span>Works</span></a></NavWorks>
            <NavArts><a href="#arts"><span>Arts</span></a></NavArts>
            <NavBlog><a href="#blog"><span>Blog</span></a></NavBlog>
            <NavMe><a href="#me"><span>It's Me</span></a></NavMe>
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