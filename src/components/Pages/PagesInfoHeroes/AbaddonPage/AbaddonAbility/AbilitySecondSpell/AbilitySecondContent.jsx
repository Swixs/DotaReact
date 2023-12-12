import React from 'react';
import AbilitySecondLineInfo from './SecondAbilityLineInfo';
import AbilitySecondStats from './AbilitySecondStats';
import AbilitySecondStatsRight from './AbilitySecondStatsRight';

const AbilitySecond = ({ posts }) => {
   return (
      <div>
         <AbilitySecondLineInfo posts={posts} />
         <AbilitySecondStats posts={posts} />
         <AbilitySecondStatsRight posts={posts} />
      </div>
   );
};

export default AbilitySecond;
