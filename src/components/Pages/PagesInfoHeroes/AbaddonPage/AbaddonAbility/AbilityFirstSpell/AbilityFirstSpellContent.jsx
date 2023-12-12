import React from 'react';
import AbilityLineInfo from './AbilityLineInfo';
import AbilityStats from './AbilityStats';
import AbilityStatsRight from './AbilityStatsRight';

const AbilityFirstSpell = ({ posts }) => {
   return (
      <div>
         <AbilityLineInfo posts={posts} />
         <AbilityStats posts={posts} />
         <AbilityStatsRight posts={posts} />
      </div>
   );
};

export default AbilityFirstSpell;
