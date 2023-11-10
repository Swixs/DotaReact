import React from "react";
import classLine from './HeaderLine.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ButtonPlay from "./ButtonPlay";



const HeaderLine = () => {

    const linkLogin = () => {
        window.location.href = 'https://steamcommunity.com/oauth/login?client_id=9B2C1229&response_type=token&state=home';
    }

    return (
        <div className={classLine.items}>
            <button className={classLine.logoItem}>
                <div className={classLine.logo}>
                    <img src={require('../../img/logoDota.png')} height={40} alt="Dota 2 Logo" className={classLine.img} />
                    DOTA2
                </div>
            </button>

            <div className={classLine.dropdown}>
                <button className={classLine.dropbtn}>Game
                    <FontAwesomeIcon icon={faCaretDown} style={{ "--fa-primary-color": "#ffffff", "--fa-secondary-color": "#fafafa", }} className={classLine.icon} />
                </button>
                <div className={classLine.dropdownContent}>
                    <a href="#">Patches</a>
                    <a href="#">Gameplay updates</a>
                    <a href="#">Previous updates</a>
                </div>
            </div>
            <button className={classLine.button}>Heroes</button>
            <button className={classLine.button}>News</button>
            <button className={classLine.button}>Esports</button>

            <div className={classLine.rightBtns}>
                <button className={classLine.btnLogin} onClick={linkLogin}>login</button>
                <div className={classLine.dropdownTranslator}>
                    <button className={classLine.dropButton}>
                        <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff", }} className={classLine.iconPlanet} />
                        Select Language
                        <FontAwesomeIcon icon={faCaretDown} style={{ "--fa-primary-color": "#ffffff", "--fa-secondary-color": "#fafafa", }} className={classLine.iconLanguage} />
                    </button>
                    <div className={classLine.dropdownCont}>
                        <a href="#">English</a>
                        <a href="#">Italian</a>
                        <a href="#">Polski</a>
                        <a href="#">Deutsch</a>
                    </div>
                </div>
            </div>

            <ButtonPlay />
        </div>
    );
};

export default HeaderLine;