import React from 'react';
import HeaderLine from "../../Header/HeaderLine";
import classHeroes from './Heroes.module.css';
import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';
import Abaddon from './HeroesButtonns/Abaddon';


const Heroes = () => {
    return (
        <div className={classHeroes.page}>
            <HeaderLine />
            <HeroesText />
            <HeroesInput />
            <div className={classHeroes.container}>
                <Abaddon />
            </div>
        </div>
    );
};

export default Heroes;