import React, { useState, useEffect } from 'react';
import AbilityVideo from './HeroAbilityVideo';
import AbilityButtons from './AbilityButtons';
import AbilityFirstSpell from './AbilityFirstSpell/AbilityFirstSpellContent';
import AbilitySecondSpell from './AbilitySecondSpell/AbilitySecondContent';
import AbilityTherdSpell from './AbilityTherdSpell/AbilityTherdSpell';
import AbilityFourthSpell from './AbilityFourthSpell/AbilityFourthSpell';

import classPage from '../../../../style/HeroPage.module.css';

const AbaddoneAbilityLeft = ({ posts }) => {
   const [selectedAbility, setSelectedAbility] = useState('ability1');
   const [buttonActive, setButtonActive] = useState('ability1');

   const selectAbility = ability => {
      setSelectedAbility(ability);
      setButtonActive(ability);
   };

   useEffect(() => {
      selectAbility('ability1');
   }, []);
   return (
      <div className={classPage.pageFlex}>
         <AbilityVideo selectedAbility={selectedAbility} posts={posts} />

         <div className={classPage.pageContent}>
            <AbilityButtons
               onSelectAbility={selectAbility}
               posts={posts}
               activeButton={buttonActive}
            />
            <div className={classPage.abilitiesInfo}>
               {selectedAbility === 'ability1' && (
                  <AbilityFirstSpell posts={posts} />
               )}
               {selectedAbility === 'ability2' && (
                  <AbilitySecondSpell posts={posts} />
               )}
               {selectedAbility === 'ability3' && (
                  <AbilityTherdSpell posts={posts} />
               )}
               {selectedAbility === 'ability4' && (
                  <AbilityFourthSpell posts={posts} />
               )}
            </div>
         </div>
      </div>
   );
};

export default AbaddoneAbilityLeft;
