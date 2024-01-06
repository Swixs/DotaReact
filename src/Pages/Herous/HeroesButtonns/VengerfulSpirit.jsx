import React from 'react';
import classUniversal from './../Universal.module.css';

const VengerfulSpirit = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png"
               alt="VengerfulSpirit"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeShort}
               />
               Vengerful Spirit
            </div>
         </div>
      </div>
   );
};

export default VengerfulSpirit;
