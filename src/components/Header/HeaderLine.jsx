import React from "react";
import classLine from './HeaderLine.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const HeaderLine = () => {
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
        </div>
    );
};

export default HeaderLine;