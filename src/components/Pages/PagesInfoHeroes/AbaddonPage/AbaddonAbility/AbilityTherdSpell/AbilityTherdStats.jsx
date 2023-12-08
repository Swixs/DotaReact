import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdStats = props => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>
                     {props.thirdSpellsDetails[0].abilitySpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStats;
