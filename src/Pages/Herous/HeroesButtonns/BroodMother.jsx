import React from 'react';
import classUniversal from './../Universal.module.css';

const BroodMother = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png"
               alt="Abaddon"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeLong}
               />
               BroodMother
            </div>
         </div>
      </div>
   );
};

export default BroodMother;
