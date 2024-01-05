import React from 'react';
import classUniversal from './../Universal.module.css';

const SandKing = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png"
               alt="SandKing"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeShort}
               />
               Sand King
            </div>
         </div>
      </div>
   );
};

export default SandKing;
