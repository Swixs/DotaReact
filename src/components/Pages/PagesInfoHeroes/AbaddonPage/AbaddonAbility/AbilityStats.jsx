import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityStats = () => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>
                     Unit Target
                  </span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  AFFECTS:
                  <span className={classAbaddonPage.spanAbility}>Heroes</span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  DAMAGE TYPE:
                  <span className={classAbaddonPage.spanAbilityMagical}>
                     Magical
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityStats;
