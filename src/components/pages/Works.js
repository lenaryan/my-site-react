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
                <p className="center">Hover over an image to look at details. Flexbox, RWD and scripts are not mentioned, as they are used by me everywhere and every time. In parentheses I wrote what I was responsible for. If you see just a CMS title, it means everything on a website was made by me. Except designing it, of course.</p>
                <div className="works-pics">
                    <img src={require("../../images/site-cancer.jpg")} alt="work one" className="materialboxed z-depth-3" 
                        title="zhivojrak.ru - Joomla" />
                    <img src={require("../../images/site-estetik.jpg")} alt="work two" className="materialboxed z-depth-3" 
                        title="estetik51.ru - Joomla (RWD, changed main and some other pages)" />
                    <img src={require("../../images/site-imkofe.jpg")} alt="work three" className="materialboxed z-depth-3"
                        title="imkofe.ru - Bitrix (pages, RWD), next devs changed some details and lost the cart icon" />
                    <img src={require("../../images/site-glu.jpg")} alt="work four" className="materialboxed z-depth-3" 
                        title="gl-u.ru - Joomla (RWD and some changes)" />
                    <img src={require("../../images/site-wallet.jpg")} alt="work five" className="materialboxed z-depth-3"
                        title="newwallet.ru - Joomla (RWD, some details and pages, ajax)" />
                    <img src={require("../../images/site-trans.jpg")} alt="work six" className="materialboxed z-depth-3" 
                        title="trans-art.ru - WP" />
                    <img src={require("../../images/site-trans-del.jpg")} alt="work seven" className="materialboxed z-depth-3" 
                        title="trans-art.ru/delivery - WP" />
                    <img src={require("../../images/site-mtseti.jpg")} alt="work eight" className="materialboxed z-depth-3"
                        title="mtseti.ru - Joomla" />
                    <img src={require("../../images/site-rezina.png")} alt="work nine" className="materialboxed z-depth-3"
                        title="росрезинатехника.рф (pk-rezinotehnika.ru) - Joomla" />
                    <img src={require("../../images/site-tlset.jpg")} alt="work ten" className="materialboxed z-depth-3"
                        title="tlset.ru - Birtix, used CSS Grid (everything except horrible looking banners, sticked pages to the sidebar and repeating icons in the sidebar)" />
                    <img src={require("../../images/site-sport.jpg")} alt="work eleven" className="materialboxed z-depth-3" 
                        title="uxsports.ru - WP, used Parallax" />
                    <img src={require("../../images/site-sila.jpg")} alt="work twelve" className="materialboxed z-depth-3" 
                        title="sila-tishiny.ru - Bitrix" />
                    <img src={require("../../images/site-tender.png")} alt="work thirteen" className="materialboxed z-depth-3"
                        title="new.северсайт.рф - MODx" />
                    <img src={require("../../images/site-reklama.png")} alt="work fourteen" className="materialboxed z-depth-3" 
                        title="adv51.ru - WP (main page, services page)" />
                    <img src={require("../../images/site-accent.jpg")} alt="work fifteen" className="materialboxed z-depth-3"
                        title="accent.северсайт.рф - Bitrix" />
                </div>
            </div>
        )
    }
}

export default Works;