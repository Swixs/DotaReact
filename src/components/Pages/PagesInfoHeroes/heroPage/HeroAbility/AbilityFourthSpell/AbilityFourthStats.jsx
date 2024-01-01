import classPage from '../../../../../style/HeroPage.module.css';

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
         <div className={classPage.abilityStats}>
            <div>
               <div className={classPage.textAbility}>
                  {posts[0].fourthSpellsDetails[0].firstInfoSpell}
                  <span className={classPage.spanAbility}>
                     {posts[0].fourthSpellsDetails[0].firstStatsInfoSpell}
                  </span>
               </div>
               <div className={classPage.textAbility}>
                  {posts[0].fourthSpellsDetails[0].secondInfoSpell}
                  <span
                     className={
                        posts[0].fourthSpellsDetails[0].colorTextSpell ||
                        classPage.spanAbility
                     }
                  >
                     {posts[0].fourthSpellsDetails[0].secondStatsInfoSpell}
                  </span>
               </div>
               <div className={classPage.textAbility}>
                  {posts[0].fourthSpellsDetails[0].thirdInfoSpell}
                  <span
                     className={
                        posts[0].fourthSpellsDetails[0].colorTextSpellSecond ||
                        classPage.spanAbility
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
