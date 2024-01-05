import React from 'react';
import classUniversal from './../Universal.module.css';

const BristleBack = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png"
            alt="AntiMage"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
               alt="atribute"
               className={classUniversal.pictAtribute}
            />
            BristleBack
         </div>
      </div>
   );
};

export default BristleBack;
