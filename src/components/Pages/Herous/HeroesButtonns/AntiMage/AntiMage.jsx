import React from 'react';
import { Link } from 'react-router-dom';
import classUniversal from '../Universal.module.css';

const AntiMage = () => {
   return (
      <Link to="/antimage" className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
               alt="AntiMage"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                  alt="atribute"
                  className={classUniversal.pictAtribute}
               />
               Anti-Mage
            </div>
         </div>
      </Link>
   );
};

export default AntiMage;
