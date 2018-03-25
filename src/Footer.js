import React, { Component } from 'react';
import styled from'styled-components';


class Footer extends Component {
  render() {
    const Footer = styled.section`
      background: linear-gradient(to top, black, rgba(0, 0, 0, 0.85));
      height: 220px;
    `;

    const FootInside = styled.section`
      text-align: center;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      padding: 50px 30px;
      width: 70%;
      border-top: 1px solid lightgrey;
      margin: 0 auto;

      > p {
        margin: 0 0 5px;
      }

      > a {
        font-size: 20pt;
        text-decoration: none;
        color: unset;
      }

      > a > span {
        color: peachpuff;
        transition: all 0.3s ease-in-out;
      }

      :hover span {
        text-decoration: underline;
        text-decoration-style: dashed;
        text-underline-position: under;
      }

      :hover .fcol1 {
        color: #0a995c;
        text-decoration-color: #0a995c;
      }
      :hover .fcol2 {
        color: #10ff12;
        text-decoration-color: #10ff12;
      }
      :hover .fcol3 {
        color: #f98ff7;
        text-decoration-color: #f98ff7;
      }
      :hover .fcol4 {
        color: #a946cc;
        text-decoration-color: #a946cc;
      }

    `;

    const Social = styled.div`
      display: flex;
      width: 110px;
      justify-content: space-between;
      position: relative;
      top: 15px;

      > a > .fab:before {
        transition-duration: 0.2s;
        color: peachpuff;
      }

      > a > .fa-vk:hover:before {
        color: #10ff12;
      }

      > a > .fa-facebook-f:hover:before {
        color: #f98ff7;
      }

      > a > .fa-instagram:hover:before {
        color: #a946cc;
      }
    `;

    return (
      <Footer> 
        <div className="wrapper">
            <FootInside>
                <p>Contact me:</p>
                <a href="mailto:enenanichutina@gmail.com">
                    <span className="fcol1">enenanichutina</span>
                    <span className="fcol2">@</span>
                    <span className="fcol3">gmail</span>
                    <span className="fcol4">.com</span>
                </a>
                <Social>
                  <a href="https://vk.com/lena_ryan"><i class="fab fa-vk"></i></a>
                  <a href="https://www.facebook.com/russian.plazma.drink"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/russian_plazma_drink/"><i class="fab fa-instagram"></i></a>                  
                </Social>
            </FootInside>
        </div>
      </Footer>
    );
  }
}

export default Footer;
