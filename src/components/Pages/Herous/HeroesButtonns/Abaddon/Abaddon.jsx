import React from 'react';
import { Link } from 'react-router-dom';
import classUniversal from '../Universal.module.css';

const Abaddon = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <Link to="/abaddon" className={classUniversal.link}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png"
                  alt="Abaddon"
                  className={classUniversal.heroPict}
               />
               <div className={classUniversal.hoverText}>
                  <img
                     src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                     alt="atribute"
                     className={classUniversal.pictAtribute}
                  />
                  Abaddon
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Abaddon;
