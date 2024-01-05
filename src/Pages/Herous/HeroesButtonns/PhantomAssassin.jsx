import React from 'react';
import classUniversal from './../Universal.module.css';

const PhantomAssassin = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png"
            alt="PhantomAssassin"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Phantom Assassin
         </div>
      </div>
   );
};

export default PhantomAssassin;
