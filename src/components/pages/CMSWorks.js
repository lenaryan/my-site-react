import React, { Component } from 'react';
import M from 'materialize-css';

class CMSWorks extends Component {
    componentDidMount() {
        //document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems);
        //});
    }

    render() {
        return (
            <>
                <p className="center">On a desktop, hover over an image to look at details. Flexbox, RWD and scripts are not mentioned, as they are used by me everywhere and every time. In parentheses I wrote what I was responsible for. If you see just a CMS title, it means everything on a website was made by me. Except designing it, of course.</p>
                <div className="works-pics">
                    <div class="center">
                        <img src={require("../../images/site-cancer.jpg")} alt="work one" className="materialboxed z-depth-3" 
                        title="Joomla" />
                        <a class="work-title" href="http://zhivojrak.ru">Живые Раки</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-estetik.jpg")} alt="work two" className="materialboxed z-depth-3" 
                        title="Joomla (RWD, changed main and some other pages)" />
                        <a class="work-title" href="http://estetik51.ru">Центр косметологии "Эстетик"</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-imkofe.jpg")} alt="work three" className="materialboxed z-depth-3"
                        title="Bitrix (pages, RWD), next devs changed some details and lost the cart icon" />
                        <a class="work-title" href="https://imkofe.ru">Империя кофе</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-glu.jpg")} alt="work four" className="materialboxed z-depth-3" 
                        title="Joomla (RWD and some changes)" />
                        <a class="work-title" href="http://gl-u.ru">Галерея уюта</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-wallet.jpg")} alt="work five" className="materialboxed z-depth-3"
                        title="Joomla (RWD, some details and pages, ajax)" />
                        <a class="work-title" href="https://newwallet.ru">New Wallet</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-trans.jpg")} alt="work six" className="materialboxed z-depth-3" 
                        title="WP" />
                        <a class="work-title" href="http://trans-art.ru">ArtInBox</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-trans-del.jpg")} alt="work seven" className="materialboxed z-depth-3" 
                        title="WP" />
                        <a class="work-title" href="http://trans-art.ru/delivery">Transart</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-mtseti.jpg")} alt="work eight" className="materialboxed z-depth-3"
                        title="Joomla" />
                        <a class="work-title" href="http://mtseti.ru">Мончегорская теплосеть</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-rezina.jpg")} alt="work nine" className="materialboxed z-depth-3"
                        title="Joomla" />
                        <a class="work-title" href="http://pk-rezinotehnika.ru">Резинотехника</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-tlset.jpg")} alt="work ten" className="materialboxed z-depth-3"
                        title="Bitrix, used CSS Grid (everything except horrible looking banners, sticked pages to the sidebar and repeating icons in the sidebar)" />
                        <a class="work-title" href="https://tlset.ru">Телесеть</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-sport.jpg")} alt="work eleven" className="materialboxed z-depth-3" 
                        title="WP, used Parallax" />
                        <a class="work-title" href="http://www.uxsports.ru">UXSports</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-sila.jpg")} alt="work twelve" className="materialboxed z-depth-3" 
                        title="Bitrix" />
                        <a class="work-title" href="http://sila-tishiny.ru">Сила Тишины</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-tender.jpg")} alt="work thirteen" className="materialboxed z-depth-3"
                        title="MODx" />
                        <a class="work-title" href="http://szk-tender.ru">СЗК-Тендер</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-reklama.jpg")} alt="work fourteen" className="materialboxed z-depth-3" 
                        title="WP" />
                        <a class="work-title" href="http://adv51.ru">Новая Реклама</a>
                    </div>
                    <div class="center">
                        <img src={require("../../images/site-accent.jpg")} alt="work fifteen" className="materialboxed z-depth-3"
                        title="Bitrix" />
                        <a class="work-title" href="http://akcent-electro.ru">Акцент Электро</a>
                    </div>
                    <div class="center"><img src={require("../../images/site-pizzburg.jpg")} alt="work fifteen" className="materialboxed z-depth-3"
                        title="MODx" />
                        <a class="work-title" href="http://http://bar-pizzburg.ru/burger-smouk.html">Ресторан "Питсбург"</a>
                    </div>
                </div>
            </>
        )
    }
}

export default CMSWorks;