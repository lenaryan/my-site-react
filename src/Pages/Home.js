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
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
            </div>
            <div className="block-info">
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
                <div className="color" id="arts">Arts</div>
            </div>
            <div className="block-info">
                <div className="color" id="blog">Blog</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
            </div>
            <div className="block-info">
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
                <div className="color" id="me">It's Me</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;