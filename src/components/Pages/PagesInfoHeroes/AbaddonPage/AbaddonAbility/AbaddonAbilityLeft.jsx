import React, { useState, useEffect } from 'react';
import AbilityVideo from './AbaddonAbilityVideo';
import AbilityButtons from './AbilityButtons';
import classAbaddonPage from '../AbaddonPage.module.css';
import AbilityFirstSpell from './AbilityFirstSpell/AbilityFirstSpellContent';
import AbilitySecondSpell from './AbilitySecondSpell/AbilitySecondContent';
import AbilityTherdSpell from './AbilityTherdSpell/AbilityTherdSpell';
import AbilityFourthSpell from './AbilityFourthSpell/AbilityFourthSpell';

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
      <div className={classAbaddonPage.pageFlex}>
         <AbilityVideo selectedAbility={selectedAbility} posts={posts} />

         <div className={classAbaddonPage.pageContent}>
            <AbilityButtons
               onSelectAbility={selectAbility}
               posts={posts}
               activeButton={buttonActive}
            />
            <div className={classAbaddonPage.abilitiesInfo}>
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
