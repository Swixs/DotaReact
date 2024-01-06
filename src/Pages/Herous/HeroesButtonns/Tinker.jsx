import React from 'react';
import classUniversal from './../Universal.module.css';

const Tinker = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png"
            alt="Tinker"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Tinker
         </div>
      </div>
   );
};

export default Tinker;
