import React from 'react';
import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityButtons = ({ onSelectAbility, spellsImg, activeButton }) => {
   const abilityBtn = ability => {
      onSelectAbility(ability);
   };

   return (
      <div>
         <button
            onClick={() => abilityBtn('ability1')}
            className={`${classAbaddonPage.btn} ${
               activeButton === 'ability1' ? classAbaddonPage.activeButton : ''
            }`}
         >
            <img
               className={classAbaddonPage.spell}
               src={spellsImg[0].firstSpell}
               alt="firstSpell"
            />
         </button>
         <button
            onClick={() => abilityBtn('ability2')}
            className={`${classAbaddonPage.btn} ${
               activeButton === 'ability2' ? classAbaddonPage.activeButton : ''
            }`}
         >
            <img
               className={classAbaddonPage.spell}
               src={spellsImg[0].secondSpell}
               alt="secondSpell"
            />
         </button>

         <button
            onClick={() => abilityBtn('ability3')}
            className={`${classAbaddonPage.btn} ${
               activeButton === 'ability3' ? classAbaddonPage.activeButton : ''
            }`}
         >
            <img
               className={classAbaddonPage.spell}
               src={spellsImg[0].thirdSpell}
               alt="thirdSpell"
            />
         </button>

         <button
            onClick={() => abilityBtn('ability4')}
            className={`${classAbaddonPage.btn} ${
               activeButton === 'ability4' ? classAbaddonPage.activeButton : ''
            }`}
         >
            <img
               className={classAbaddonPage.spell}
               src={spellsImg[0].fourthSpell}
               alt="fourthSpell"
            />
         </button>
      </div>
   );
};

export default AbilityButtons;
