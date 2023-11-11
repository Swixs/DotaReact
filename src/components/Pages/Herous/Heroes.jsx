import React from 'react';
import HeaderLine from "../../Header/HeaderLine";
import classHeroes from './Heroes.module.css';
import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';


const Heroes = () => {
    return (
        <div className={classHeroes.page}>
            <HeaderLine />
            <HeroesText />
            <HeroesInput />
        </div>
    );
};

export default Heroes;