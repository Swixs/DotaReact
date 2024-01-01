import React from 'react';
import classPage from '../HeroPage.module.css';

const AbilityButtons = ({ onSelectAbility, activeButton, posts }) => {
   const abilityBtn = ability => {
      onSelectAbility(ability);
   };

   return (
      <div>
         <button
            onClick={() => abilityBtn('ability1')}
            className={`${classPage.btn} ${
               activeButton === 'ability1' ? classPage.activeButton : ''
            }`}
         >
            <img
               className={classPage.spell}
               src={posts[0].spellsImg[0].firstSpell}
               alt="firstSpell"
            />
         </button>
         <button
            onClick={() => abilityBtn('ability2')}
            className={`${classPage.btn} ${
               activeButton === 'ability2' ? classPage.activeButton : ''
            }`}
         >
            <img
               className={classPage.spell}
               src={posts[0].spellsImg[0].secondSpell}
               alt="secondSpell"
            />
         </button>

         <button
            onClick={() => abilityBtn('ability3')}
            className={`${classPage.btn} ${
               activeButton === 'ability3' ? classPage.activeButton : ''
            }`}
         >
            <img
               className={classPage.spell}
               src={posts[0].spellsImg[0].thirdSpell}
               alt="thirdSpell"
            />
         </button>

         <button
            onClick={() => abilityBtn('ability4')}
            className={`${classPage.btn} ${
               activeButton === 'ability4' ? classPage.activeButton : ''
            }`}
         >
            <img
               className={classPage.spell}
               src={posts[0].spellsImg[0].fourthSpell}
               alt="fourthSpell"
            />
         </button>
      </div>
   );
};

export default AbilityButtons;
