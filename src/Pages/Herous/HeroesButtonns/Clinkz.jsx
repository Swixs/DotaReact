import React from 'react';
import classUniversal from './../Universal.module.css';

const Clinkz = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png"
            alt="AntiMage"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
               alt="atribute"
               className={classUniversal.pictAtributeShort}
            />
            Clinkz
         </div>
      </div>
   );
};

export default Clinkz;
