import React from 'react';
import AbilityFourthLineInfo from './AbilityFourthLineInfo';
import AbilityFourthStats from './AbilityFourthStats';
import AbilityFourthStatsRight from './AbilityFourthStatsRight';

import classPage from './../../../../../style/HeroPage.module.css';

const AbilityFourthSpell = ({ posts }) => {
   return (
      <div className={classPage.contentHeight}>
         <AbilityFourthLineInfo posts={posts} />
         <AbilityFourthStats posts={posts} />
         <AbilityFourthStatsRight posts={posts} />
      </div>
   );
};

export default AbilityFourthSpell;
