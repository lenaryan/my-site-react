import React, { Component } from 'react';

class Home extends Component {
    rotateHamburger() {
        document.getElementById('toggle-label').classList.toggle('rotate');
        for (let i=0; i<document.getElementById('nav').children.length;i++)
        document.getElementById('nav').children[i].classList.toggle('appear');
    }

  render() {
    return (
      <div className="home">
        <div className="banner">
            <div className="overlay">
                <span className="logo">METALWEBDEV</span>
                <h1>LENA RYAN</h1>
                <p><span style={{color: '#0a995c'}}>Frontend</span> 
                <span style={{color: '#10ff12'}}> web</span> 
                <span style={{color: '#f98ff7'}}> dev</span> &amp; 
                <span style={{color: '#a946cc'}}> musician</span></p>
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
                <a href="#" class="works">Take a look</a>
            </div>
            <div className="block-info">
                <div className="color" id="arts">Arts</div>
                <div className="text">I love art. I love music. Sometimes I draw pics. But mostly all my art is music - singing, growling and playing in bands.</div>
                <a href="#" class="arts">Take a look</a>
            </div>
            <div className="block-info">
                <div className="color" id="blog">Blog</div>
                <div className="text">Once a week I try to write a blog post about things related to coding, web development or metal music.</div>
                <a href="#" class="blog">Take a look</a>
            </div>
            <div className="block-info">
                <div className="color" id="me">It's Me</div>
                <div className="text">Basically this is my CV and some more details about me.</div>
                <a href="#" class="me">Take a look</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;