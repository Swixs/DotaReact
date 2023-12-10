import React from 'react';
import classUniversal from '../Universal.module.css';

const Alchemist = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png"
            alt="Abaddon"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
               alt="atribute"
               className={classUniversal.pictAtribute}
            />
            Alchemist
         </div>
      </div>
   );
};

export default Alchemist;
