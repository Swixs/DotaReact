import React from 'react';
import classUniversal from './../Universal.module.css';

const TemplarAssassin = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png"
            alt="TemplarAssassin"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Templar Assassin
         </div>
      </div>
   );
};

export default TemplarAssassin;
