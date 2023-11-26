import React, { useState } from 'react';
import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityButtons = ({ onSelectAbility }) => {
   const [selectedButton, setSelectedButton] = useState(null);

   const abilityBtn = ability => {
      setSelectedButton(ability);
      onSelectAbility(ability);
   };

   return (
      <div>
         <button
            onClick={() => abilityBtn('ability1')}
            className={classAbaddonPage.btn}
         >
            <img
               className={classAbaddonPage.spell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png"
               alt="firstSpell"
            />
         </button>
         <button
            onClick={() => abilityBtn('ability2')}
            className={classAbaddonPage.btn}
         >
            <img
               className={classAbaddonPage.spell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png"
               alt="secondSpell"
            />
         </button>

         {selectedButton && (
            <div>
               <p>Selected Button: {selectedButton}</p>
            </div>
         )}
      </div>
   );
};

export default AbilityButtons;
