import React from 'react';
import AbilityTherdLineInfo from './TherdAbilityLineInfo';
import AbilityTherdStatsRight from './AbilityTherdStatsRight';
import AbilityTherdStats from './AbilityTherdStats';

const AbilityTherdSpell = () => {
   return (
      <div>
         <AbilityTherdLineInfo />
         <AbilityTherdStats />
         <AbilityTherdStatsRight />
      </div>
   );
};

export default AbilityTherdSpell;
