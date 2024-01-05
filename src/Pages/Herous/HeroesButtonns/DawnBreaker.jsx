import React from 'react';
import classUniversal from './../Universal.module.css';

const DawnBreaker = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png"
               alt="DawnBreaker"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeLong}
               />
               DawnBreaker
            </div>
         </div>
      </div>
   );
};

export default DawnBreaker;
