import React from "react";
import classLine from './HeaderLine.module.css'

const HeaderLine = () => {
    return (
        <div className={classLine.items}>
            <button className={classLine.logoItem}>
                <div className={classLine.logo}>
                    <img src={require('../../img/logoDota.png')} height={40} alt="Dota 2 Logo" />
                    DOTA2
                </div>
            </button>
            <button>Game</button>
            <button>Heroes</button>
            <button>News</button>
            <button>Esports</button>
        </div>
    );
};

export default HeaderLine;