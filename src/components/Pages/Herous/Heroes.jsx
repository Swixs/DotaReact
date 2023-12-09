import React from 'react';
import classHeroes from './Heroes.module.css';
import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';
import Abaddon from './HeroesButtonns/Abaddon/Abaddon';
import Alchemist from './HeroesButtonns/Alchemist/Alchemist';
import AncientApparation from './HeroesButtonns/AncientApparition/AncientApparation';
import AntiMage from './HeroesButtonns/AntiMage/AntiMage';
import ArcWarden from './HeroesButtonns/ArcWarden/ArcWarden';
import { useParams } from 'react-router-dom';

const Heroes = () => {
   // const { hero } = useParams();

   // create file and name getInfo and  create funk for get info and
   // create folder utils in root and move getInfofile
   // getFileInfo(hero);

   // це їде в хіро

   // тут буде функція яка дістає дані

   return (
      <div className={classHeroes.page}>
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
