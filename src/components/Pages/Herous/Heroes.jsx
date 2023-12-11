import React from 'react';
import { Link } from 'react-router-dom';
import classHeroes from './Heroes.module.css';
import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';
import Abaddon from './HeroesButtonns/Abaddon/Abaddon';

const Heroes = () => {
   return (
      <div className={classHeroes.page}>
         <HeroesText />
         <HeroesInput />
         <div className={classHeroes.container}>
            <Link to="/heroes/Abaddon">
               <Abaddon />
            </Link>
            <Link to="/heroes/Alchemist">Alchemist</Link>
         </div>
      </div>
   );
};

export default Heroes;
