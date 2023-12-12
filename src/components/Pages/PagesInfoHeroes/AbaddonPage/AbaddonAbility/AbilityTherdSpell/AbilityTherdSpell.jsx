import React from 'react';
import AbilityTherdLineInfo from './TherdAbilityLineInfo';
import AbilityTherdStatsRight from './AbilityTherdStatsRight';
import AbilityTherdStats from './AbilityTherdStats';

const AbilityTherdSpell = ({ posts }) => {
   return (
      <div>
         <AbilityTherdLineInfo posts={posts} />
         <AbilityTherdStats posts={posts} />
         <AbilityTherdStatsRight posts={posts} />
      </div>
   );
};

export default AbilityTherdSpell;
