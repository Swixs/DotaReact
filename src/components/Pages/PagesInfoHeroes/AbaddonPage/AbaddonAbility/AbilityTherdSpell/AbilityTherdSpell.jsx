import React from 'react';
import AbilityTherdLineInfo from './TherdAbilityLineInfo';
import AbilityTherdStatsRight from './AbilityTherdStatsRight';
import AbilityTherdStats from './AbilityTherdStats';
import classAbaddonPage from './../../AbaddonPage.module.css';

const AbilityTherdSpell = ({ posts }) => {
   return (
      <div className={classAbaddonPage.contentHeight}>
         <AbilityTherdLineInfo posts={posts} />
         <AbilityTherdStats posts={posts} />
         <AbilityTherdStatsRight posts={posts} />
      </div>
   );
};

export default AbilityTherdSpell;
