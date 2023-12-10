import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import classHeroes from './Heroes.module.css';
import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';
import Abaddone from './../Herous/HeroesButtonns/Abaddon/Abaddon';
import HeroDetails from '../../../heroDetails';

const Heroes = () => {
   return (
      <div className={classHeroes.page}>
         <HeroesText />
         <HeroesInput />
         <div className={classHeroes.container}>
            <Link to="/heroes/Abaddon">-
               <Abaddone />
            </Link>
            <Link to="/heroes/Alchemist">Alchemist</Link>
         </div>
         <div className={classHeroes.container}>
            <Routes>
               <Route path="/:heroName" element={<HeroDetails />} />
            </Routes>
         </div>
      </div>
   );
};

export default Heroes;
