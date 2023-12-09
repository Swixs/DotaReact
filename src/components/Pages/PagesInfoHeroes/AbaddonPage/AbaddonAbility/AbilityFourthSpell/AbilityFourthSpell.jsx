import React from 'react';
import AbilityFourthLineInfo from './AbilityFourthLineInfo';
import AbilityFourthStats from './AbilityFourthStats';
import AbilityFourthStatsRight from './AbilityFourthStatsRight';

const AbilityFourthSpell = props => {
   return (
      <div>
         <AbilityFourthLineInfo
            spellsImg={props.spellsImg}
            fourthSpellsDetails={props.fourthSpellsDetails}
         />
         <AbilityFourthStats fourthSpellsDetails={props.fourthSpellsDetails} />
         <AbilityFourthStatsRight
            fourthSpellsDetails={props.fourthSpellsDetails}
         />
      </div>
   );
};

export default AbilityFourthSpell;
