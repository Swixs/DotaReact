import React from 'react';
import AbilitySecondLineInfo from './SecondAbilityLineInfo';
import AbilitySecondStats from './AbilitySecondStats';
import AbilitySecondStatsRight from './AbilitySecondStatsRight';

const AbilitySecond = props => {
   return (
      <div>
         <AbilitySecondLineInfo
            spellsImg={props.spellsImg}
            secondSpellsDetails={props.secondSpellsDetails}
         />
         <AbilitySecondStats secondSpellsDetails={props.secondSpellsDetails} />
         <AbilitySecondStatsRight
            secondSpellsDetails={props.secondSpellsDetails}
         />
      </div>
   );
};

export default AbilitySecond;
