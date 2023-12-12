import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondStats = ({ posts }) => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>
                     {posts[0].secondSpellsDetails[0].targetSpell}
                  </span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  AFFECTS:
                  <span className={classAbaddonPage.spanAbility}>
                     {posts[0].secondSpellsDetails[0].affectsSpell}
                  </span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  DAMAGE TYPE:
                  <span className={classAbaddonPage.spanAbilityMagical}>
                     {posts[0].secondSpellsDetails[0].damageTypeSpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondStats;
