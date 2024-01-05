import React from 'react';
import classUniversal from './../Universal.module.css';

const LifeStealer = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png"
               alt="LifeStealer"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeShort}
               />
               LifeStealer
            </div>
         </div>
      </div>
   );
};

export default LifeStealer;
