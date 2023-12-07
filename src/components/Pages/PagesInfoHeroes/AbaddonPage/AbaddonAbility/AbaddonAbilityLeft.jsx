import React, { useState, useEffect } from 'react';
import AbilityVideo from './AbaddonAbilityVideo';
import AbilityButtons from './AbilityButtons';
import classAbaddonPage from '../AbaddonPage.module.css';
import AbilityFirstSpell from './AbilityFirstSpell/AbilityFirstSpellContent';
import AbilitySecondSpell from './AbilitySecondSpell/AbilitySecondContent';
import AbilityTherdSpell from './AbilityTherdSpell/AbilityTherdSpell';
import AbilityFourthSpell from './AbilityFourthSpell/AbilityFourthSpell';

const AbaddoneAbilityLeft = props => {
   const [selectedAbility, setSelectedAbility] = useState(null);

   const selectAbility = ability => {
      setSelectedAbility(ability);
   };

   useEffect(() => {
      selectAbility('ability1');
   }, []);
   return (
      <div className={classAbaddonPage.pageFlex}>
         <AbilityVideo
            selectedAbility={selectedAbility}
            videoSpells={props.videoSpells}
         />

         <div className={classAbaddonPage.pageContent}>
            <AbilityButtons
               onSelectAbility={selectAbility}
               spellsImg={props.spellsImg}
            />
            <div className={classAbaddonPage.abilitiesInfo}>
               {selectedAbility === 'ability1' && (
                  <AbilityFirstSpell
                     spellsImg={props.spellsImg}
                     firstSpellsDetails={props.firstSpellsDetails}
                  />
               )}
               {selectedAbility === 'ability2' && <AbilitySecondSpell />}
               {selectedAbility === 'ability3' && <AbilityTherdSpell />}
               {selectedAbility === 'ability4' && <AbilityFourthSpell />}
            </div>
         </div>
      </div>
   );
};

export default AbaddoneAbilityLeft;
