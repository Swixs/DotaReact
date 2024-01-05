import React from 'react';
import classUniversal from './../Universal.module.css';

const QueenOfPain = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png"
            alt="QueenOfPain"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverTextAncient}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Queen of Pain
         </div>
      </div>
   );
};

export default QueenOfPain;
