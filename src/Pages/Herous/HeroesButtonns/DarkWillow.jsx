import React from 'react';
import classUniversal from './../Universal.module.css';

const DarkWillow = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png"
               alt="DarkSeer"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeLong}
               />
               Dark Willow
            </div>
         </div>
      </div>
   );
};

export default DarkWillow;
