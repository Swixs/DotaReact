import React from 'react';
import classUniversal from './../Universal.module.css';

const MonkeyKing = () => {
   return (
      <div className={classUniversal.btn}>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png"
            alt="MonkeyKing"
            className={classUniversal.heroPict}
         />
         <div className={classUniversal.hoverText}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
               alt="atribute"
               className={classUniversal.pictAtributeLong}
            />
            Monkey King
         </div>
      </div>
   );
};

export default MonkeyKing;
