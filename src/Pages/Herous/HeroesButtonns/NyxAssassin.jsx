import React from 'react';
import classUniversal from './../Universal.module.css';

const NyxAssassin = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png"
               alt="NyxAssassin"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeShort}
               />
               Nyx Assassin
            </div>
         </div>
      </div>
   );
};

export default NyxAssassin;
