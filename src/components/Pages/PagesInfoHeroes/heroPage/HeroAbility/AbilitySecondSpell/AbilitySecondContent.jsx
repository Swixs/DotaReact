import React from 'react';
import AbilitySecondLineInfo from './SecondAbilityLineInfo';
import AbilitySecondStats from './AbilitySecondStats';
import AbilitySecondStatsRight from './AbilitySecondStatsRight';

import classPage from './../../HeroPage.module.css';

const AbilitySecond = ({ posts }) => {
   return (
      <div className={classPage.contentHeight}>
         <AbilitySecondLineInfo posts={posts} />
         <AbilitySecondStats posts={posts} />
         <AbilitySecondStatsRight posts={posts} />
      </div>
   );
};

export default AbilitySecond;
