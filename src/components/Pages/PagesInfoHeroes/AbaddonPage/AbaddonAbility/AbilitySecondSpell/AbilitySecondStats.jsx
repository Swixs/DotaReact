import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondStats = ({ posts }) => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  {posts[0].secondSpellsDetails[0].firstInfoSpell}
                  <span className={classAbaddonPage.spanAbility}>
                     {posts[0].secondSpellsDetails[0].firstStatsInfoSpell}
                  </span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  {posts[0].secondSpellsDetails[0].secondInfoSpell}
                  <span className={classAbaddonPage.spanAbility}>
                     {posts[0].secondSpellsDetails[0].secondStatsInfoSpell}
                  </span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  {posts[0].secondSpellsDetails[0].thirdInfoSpell}
                  <span
                     className={posts[0].secondSpellsDetails[0].colorTextSpell}
                  >
                     {posts[0].secondSpellsDetails[0].thirdStatsInfoSpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondStats;
