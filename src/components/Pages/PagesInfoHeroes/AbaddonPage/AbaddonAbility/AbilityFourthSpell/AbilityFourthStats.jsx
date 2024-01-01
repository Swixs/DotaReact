import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStats = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].fourthSpellsDetails ||
      !posts[0].fourthSpellsDetails[0]
   ) {
      return null;
   }

   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  {posts[0].fourthSpellsDetails[0].firstInfoSpell}
                  <span className={classAbaddonPage.spanAbility}>
                     {posts[0].fourthSpellsDetails[0].firstStatsInfoSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbility}>
                  {posts[0].fourthSpellsDetails[0].secondInfoSpell}
                  <span
                     className={
                        posts[0].fourthSpellsDetails[0].colorTextSpell ||
                        classAbaddonPage.spanAbility
                     }
                  >
                     {posts[0].fourthSpellsDetails[0].secondStatsInfoSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbility}>
                  {posts[0].fourthSpellsDetails[0].thirdInfoSpell}
                  <span
                     className={
                        posts[0].fourthSpellsDetails[0].colorTextSpellSecond ||
                        classAbaddonPage.spanAbility
                     }
                  >
                     {posts[0].fourthSpellsDetails[0].thirdStatsInfoSpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStats;
