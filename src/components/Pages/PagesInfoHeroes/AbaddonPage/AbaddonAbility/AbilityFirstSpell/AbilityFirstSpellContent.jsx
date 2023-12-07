import React from 'react';
import AbilityLineInfo from './AbilityLineInfo';
import AbilityStats from './AbilityStats';
import AbilityStatsRight from './AbilityStatsRight';

const AbilityFirstSpell = props => {
   return (
      <div>
         <AbilityLineInfo
            spellsImg={props.spellsImg}
            firstSpellsDetails={props.firstSpellsDetails}
         />
         <AbilityStats firstSpellsDetails={props.firstSpellsDetails} />
         <AbilityStatsRight firstSpellsDetails={props.firstSpellsDetails} />
      </div>
   );
};

export default AbilityFirstSpell;
