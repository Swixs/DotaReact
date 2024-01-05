import React from 'react';
import classUniversal from './../Universal.module.css';

const ArcWarden = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png"
            alt="ArcWarden"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
               alt="atribute"
               className={classUniversal.pictAtribute}
            />
            Arc Warden
         </div>
      </div>
   );
};

export default ArcWarden;
