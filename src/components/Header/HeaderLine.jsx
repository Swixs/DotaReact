import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classLine from './HeaderLine.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ButtonPlay from './ButtonPlay';
import { Routes, Route } from 'react-router-dom';
import Heroes from '../Pages/Herous/Heroes';
import Esports from '../Pages/Esports/esports';
import News from '../Pages/News/News';

const HeaderLine = () => {
   const navigate = useNavigate();

   const linkLogin = () => {
      navigate(
         'https://steamcommunity.com/oauth/login?client_id=9B2C1229&response_type=token&state=home',
      );
   };

   return (
      <div className={classLine.items}>
         <Link to="/" className={classLine.logoItem}>
            <div className={classLine.logo}>
               <img
                  src={require('../../img/logoDota.png')}
                  height={40}
                  alt="Dota 2 Logo"
                  className={classLine.img}
               />
               DOTA2
            </div>
         </Link>

         <div className={classLine.dropdown}>
            <button className={classLine.dropbtn}>
               Game
               <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{
                     '--fa-primary-color': '#ffffff',
                     '--fa-secondary-color': '#fafafa',
                  }}
                  className={classLine.icon}
               />
            </button>
            <div className={classLine.dropdownContent}>
               <a href="#">Patches</a>
               <a href="#">Gameplay updates</a>
               <a href="#">Previous updates</a>
            </div>
         </div>
         <Link to="/heroes" className={classLine.button}>
            Heroes
         </Link>
         <Link to="/news" className={classLine.button}>
            News
         </Link>
         <Link to="/esports" className={classLine.button}>
            Esports
         </Link>

         <div className={classLine.rightBtns}>
            <button className={classLine.btnLogin} onClick={linkLogin}>
               login
            </button>
            <div className={classLine.dropdownTranslator}>
               <button className={classLine.dropButton}>
                  <FontAwesomeIcon
                     icon={faGlobe}
                     style={{ color: '#ffffff' }}
                     className={classLine.iconPlanet}
                  />
                  Select Language
                  <FontAwesomeIcon
                     icon={faCaretDown}
                     style={{
                        '--fa-primary-color': '#ffffff',
                        '--fa-secondary-color': '#fafafa',
                     }}
                     className={classLine.iconLanguage}
                  />
               </button>
               <div className={classLine.dropdownCont}>
                  <a href="#">English</a>
                  <a href="#">Italian</a>
                  <a href="#">Polski</a>
                  <a href="#">Deutsch</a>
               </div>
            </div>
         </div>

         <ButtonPlay />

         <Routes>
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/news" element={<News />} />
            <Route path="/esports" element={<Esports />} />
         </Routes>
      </div>
   );
};

export default HeaderLine;
