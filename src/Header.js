import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component {
  render() {
    const Header = styled.div`
        background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0.85));
        height: 80px;
    `;

    const HeadInside = styled.div`
        display: flex;
        align-items: center;

        > a {
            color: white;
            text-decoration: none;
            padding: 20px 0;
            font-size: 14pt;
            transition-duration: 0.3s;
        }

        > .link-works:hover {
            color: #0a995c;
        }
        > .link-arts:hover {
            color: #10ff12;
        }
        > .link-blog:hover {
            color: #f98ff7;
        }
        > .link-me:hover {
            color: #a946cc;
        }
        > .logo {
            font-size: 19pt;
            letter-spacing: 4px;
            flex: 1;
            transition-duration: 0.3s;
        }
        > .logo:hover {
            opacity: 0.7;
        }
        > .menu-item {
            margin-left: 50px;
        }  
    `;

    return (
        <Header> 
            <div className="wrapper">
                <HeadInside>
                    <Link className="logo" to='/'>METALWEBDEV</Link>
                    <Link className="menu-item link-works" to='/works'>Works</Link>
                    <Link className="menu-item link-arts" to='/arts'>Arts</Link>
                    <Link className="menu-item link-blog" to='/blog'>Blog</Link>
                    <Link className="menu-item link-me" to='/me'>It's Me</Link>
                </HeadInside>
            </div>
      </Header>
    );
  }
}

export default Header;
