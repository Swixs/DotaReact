import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdStats = ({ posts }) => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  {posts[0].thirdSpellsDetails[0].firstInfoSpell}
                  <span className={classAbaddonPage.spanAbility}>
                     {posts[0].thirdSpellsDetails[0].firstStatsInfoSpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStats;
