import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStats = ({ posts }) => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>
                     {posts[0].fourthSpellsDetails[0].abilitySpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStats;
