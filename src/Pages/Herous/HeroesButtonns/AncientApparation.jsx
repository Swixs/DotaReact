import React from 'react';
import classUniversal from './../Universal.module.css';

const AncientApparation = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png"
            alt="Abaddon"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtribute}
            />
            Ancient <br />
            Apparation
         </div>
      </div>
   );
};

export default AncientApparation;
