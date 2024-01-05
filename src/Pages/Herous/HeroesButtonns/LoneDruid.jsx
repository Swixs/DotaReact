import React from 'react';
import classUniversal from './../Universal.module.css';

const LoneDruid = () => {
   return (
      <div className={classUniversal.link}>
         <div className={classUniversal.btn}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png"
               alt="LoneDruid"
               className={classUniversal.heroPict}
            />
            <div className={classUniversal.hoverText}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                  alt="atribute"
                  className={classUniversal.pictAtributeShort}
               />
               Lone Druid
            </div>
         </div>
      </div>
   );
};

export default LoneDruid;
