import React from 'react';
import {Link } from 'react-router-dom';
import classAbaddon from './Abaddon.module.css';

const Abaddon = () => {
    return (
        <Link to="/abaddon" className={classAbaddon.link}>
            <div className={classAbaddon.btn}>
                <img
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png"
                    alt="Abaddon"
                    className={classAbaddon.heroPict}
                />
                <div className={classAbaddon.hoverText}>
                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                        alt="atribute" className={classAbaddon.pictAtribute} />
                    Abaddon
                </div>
            </div>
        </Link>
    );
};

export default Abaddon;