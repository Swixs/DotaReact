import React from 'react';
import classUniversal from './../Universal.module.css';

const DeathProphet = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png"
            alt="CrystalMaiden"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Death Prophet
         </div>
      </div>
   );
};

export default DeathProphet;
