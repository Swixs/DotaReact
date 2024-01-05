import React from 'react';
import classUniversal from './../Universal.module.css';

const ShadowShaman = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png"
            alt="ShadowShaman"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Shadow Shaman
         </div>
      </div>
   );
};

export default ShadowShaman;
