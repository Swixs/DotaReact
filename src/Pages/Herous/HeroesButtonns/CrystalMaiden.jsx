import React from 'react';
import classUniversal from './../Universal.module.css';

const CrystalMaiden = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png"
            alt="CrystalMaiden"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtributeShort}
            />
            Crystal <br />
            Maiden
         </div>
      </div>
   );
};

export default CrystalMaiden;
