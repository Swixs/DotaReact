import React from 'react';
import classUniversal from './../Universal.module.css';

const NaturesProphet = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png"
            alt="NaturesProphet"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Nature's Prophet
         </div>
      </div>
   );
};

export default NaturesProphet;
