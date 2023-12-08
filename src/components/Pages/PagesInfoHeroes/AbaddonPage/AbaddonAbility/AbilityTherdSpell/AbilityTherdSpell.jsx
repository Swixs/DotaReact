import React from 'react';
import AbilityTherdLineInfo from './TherdAbilityLineInfo';
import AbilityTherdStatsRight from './AbilityTherdStatsRight';
import AbilityTherdStats from './AbilityTherdStats';

const AbilityTherdSpell = props => {
   return (
      <div>
         <AbilityTherdLineInfo
            spellsImg={props.spellsImg}
            thirdSpellsDetails={props.thirdSpellsDetails}
         />
         <AbilityTherdStats thirdSpellsDetails={props.thirdSpellsDetails} />
         <AbilityTherdStatsRight
            thirdSpellsDetails={props.thirdSpellsDetails}
         />
      </div>
   );
};

export default AbilityTherdSpell;
