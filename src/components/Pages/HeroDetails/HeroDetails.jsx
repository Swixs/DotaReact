import React from 'react';
// import classHeader from './../src/components/Header/HeaderLine.module.css';
import { useParams } from 'react-router-dom';

const HeroDetails = () => {
   const { heroName } = useParams();

   return <div>{heroName}</div>;
};

export default HeroDetails;
