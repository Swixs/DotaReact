import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityStats = props => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>
                     {props.firstSpellsDetails[0].targetSpell}
                  </span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  AFFECTS:
                  <span className={classAbaddonPage.spanAbility}>
                     {props.firstSpellsDetails[0].affectsSpell}
                  </span>
               </div>
            </div>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  DAMAGE TYPE:
                  <span className={classAbaddonPage.spanAbilityMagical}>
                     {props.firstSpellsDetails[0].damageTypeSpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityStats;
