import React from 'react';
import HeaderLine from '../../Header/HeaderLine';
import classHeroes from './Heroes.module.css';
import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';
import Abaddon from './HeroesButtonns/Abaddon/Abaddon';
import Alchemist from './HeroesButtonns/Alchemist/Alchemist';
import AncientApparation from './HeroesButtonns/AncientApparition/AncientApparation';
import AntiMage from './HeroesButtonns/AntiMage/AntiMage';
import ArcWarden from './HeroesButtonns/ArcWarden/ArcWarden';

const Heroes = () => {
   return (
      <div className={classHeroes.page}>
         <HeaderLine />
         <HeroesText />
         <HeroesInput />
         <div className={classHeroes.container}>
            <Abaddon />
            <Alchemist />
            <AncientApparation />
            <AntiMage />
            <ArcWarden />
         </div>
      </div>
   );
};

export default Heroes;
