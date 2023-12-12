import React from 'react';
import AbilityFourthLineInfo from './AbilityFourthLineInfo';
import AbilityFourthStats from './AbilityFourthStats';
import AbilityFourthStatsRight from './AbilityFourthStatsRight';

const AbilityFourthSpell = ({ posts }) => {
   return (
      <div>
         <AbilityFourthLineInfo posts={posts} />
         <AbilityFourthStats posts={posts} />
         <AbilityFourthStatsRight posts={posts} />
      </div>
   );
};

export default AbilityFourthSpell;
