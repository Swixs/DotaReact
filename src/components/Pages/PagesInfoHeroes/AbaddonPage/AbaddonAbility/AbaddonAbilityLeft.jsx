import React, { useState, useEffect } from 'react';
import AbilityVideo from './AbaddonAbilityVideo';
import AbilityButtons from './AbilityButtons';
import classAbaddonPage from '../AbaddonPage.module.css';
import AbilityFirstSpell from './AbilityFirstSpell/AbilityFirstSpellContent';
import AbilitySecondSpell from './AbilitySecondSpell/AbilitySecondContent';
import AbilityTherdSpell from './AbilityTherdSpell/AbilityTherdSpell';
import AbilityFourthSpell from './AbilityFourthSpell/AbilityFourthSpell';

const AbaddoneAbilityLeft = props => {
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
         <AbilityVideo
            selectedAbility={selectedAbility}
            videoSpells={props.videoSpells}
         />

         <div className={classAbaddonPage.pageContent}>
            <AbilityButtons
               onSelectAbility={selectAbility}
               spellsImg={props.spellsImg}
               activeButton={buttonActive}
            />
            <div className={classAbaddonPage.abilitiesInfo}>
               {selectedAbility === 'ability1' && (
                  <AbilityFirstSpell
                     spellsImg={props.spellsImg}
                     firstSpellsDetails={props.firstSpellsDetails}
                  />
               )}
               {selectedAbility === 'ability2' && (
                  <AbilitySecondSpell
                     spellsImg={props.spellsImg}
                     secondSpellsDetails={props.secondSpellsDetails}
                  />
               )}
               {selectedAbility === 'ability3' && (
                  <AbilityTherdSpell
                     spellsImg={props.spellsImg}
                     thirdSpellsDetails={props.thirdSpellsDetails}
                  />
               )}
               {selectedAbility === 'ability4' && (
                  <AbilityFourthSpell
                     spellsImg={props.spellsImg}
                     fourthSpellsDetails={props.fourthSpellsDetails}
                  />
               )}
            </div>
         </div>
      </div>
   );
};

export default AbaddoneAbilityLeft;
