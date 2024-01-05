import React from 'react';
import classUniversal from './../Universal.module.css';

const Hoodwink = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png"
            alt="Hoodwink"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Hoodwink
         </div>
      </div>
   );
};

export default Hoodwink;
