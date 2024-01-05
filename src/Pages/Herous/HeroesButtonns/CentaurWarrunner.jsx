import React from 'react';
import classUniversal from './../Universal.module.css';

const CentaurWarrunner = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png"
               alt="Abaddon"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                  alt="atribute"
                  className={classUniversal.pictAtribute}
               />
               Centaur <br /> Warrunner
            </div>
         </div>
      </div>
   );
};

export default CentaurWarrunner;
