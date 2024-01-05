import React from 'react';
import classUniversal from './../Universal.module.css';

const ShadowFiend = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png"
            alt="ShadowFiend"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Shadow Fiend
         </div>
      </div>
   );
};

export default ShadowFiend;
