import React, { Component } from 'react';

class Home extends Component {
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
        <input type="checkbox" id="check-toggle"/>  
        <label for="check-toggle" id="toggle-label"><span id="toggle"></span></label>
        <ul id="nav">
            <li><a href="#"><span>Works</span></a></li>
            <li><a href="#"><span>Arts</span></a></li>
            <li><a href="#"><span>Blog</span></a></li>
            <li><a href="#"><span>It's Me</span></a></li>
        </ul>
        <div class="wrapper">
            <div class="block-info">
                <div class="color" id="works">Works</div>
                <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
            </div>
            <div class="block-info">
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
                <div class="color" id="arts">Arts</div>
            </div>
            <div class="block-info">
                <div class="color" id="blog">Blog</div>
                <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
            </div>
            <div class="block-info">
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam. Itaque, obcaecati maxime tempora doloremque sequi, natus dolorem perferendis illo nostrum unde cupiditate rerum doloribus dicta repellendus ipsa odio repudiandae nisi fuga vitae tenetur? Enim molestiae fugit, quisquam voluptas iure possimus odit eligendi excepturi placeat rem aperiam dolorem voluptate dignissimos doloremque fuga amet vero quasi accusamus libero consectetur quis. Commodi facere obcaecati est soluta ad totam illo provident itaque perspiciatis eaque explicabo laboriosam, excepturi odit quia, ex, necessitatibus facilis delectus ipsum voluptatem voluptatibus assumenda quidem molestiae. Velit doloribus optio doloremque id est ex eos earum distinctio! Illum mollitia quam vitae.</div>
                <div class="color" id="me">It's Me</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;