import React from 'react';
import classUniversal from './../Universal.module.css';

const KeeperOfTheLight = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png"
            alt="KeeperOfTheLight"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Keeper Of The Light
         </div>
      </div>
   );
};

export default KeeperOfTheLight;
