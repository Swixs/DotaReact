import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStats = ({ posts }) => {
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
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStats;
