import React from 'react';
import { Link } from 'react-router-dom';

import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';
import Abaddon from './HeroesButtonns/Abaddon/Abaddon';
import Alchimist from './HeroesButtonns/Alchemist/Alchemist';
import AncientApparation from './HeroesButtonns/AncientApparition/AncientApparation';
import AntiMage from './HeroesButtonns/AntiMage/AntiMage';
import ArcWarden from './HeroesButtonns/ArcWarden/ArcWarden';

import classHeroes from './Heroes.module.css';

const Heroes = () => {
   return (
      <div className={classHeroes.page}>
         <HeroesText />
         <HeroesInput />
         <div className={classHeroes.container}>
            <Link to="/heroes/Abaddon">
               <Abaddon />
            </Link>
            <Link to="/heroes/Alchemist">
               <Alchimist />
            </Link>
            <Link to="/heroes/Ancientapparition">
               <AncientApparation />
            </Link>
            <Link to="/heroes/Anti-mage">
               <AntiMage />
            </Link>
            <Link to="/heroes/Arcwarden">
               <ArcWarden />
            </Link>
         </div>
      </div>
   );
};

export default Heroes;
