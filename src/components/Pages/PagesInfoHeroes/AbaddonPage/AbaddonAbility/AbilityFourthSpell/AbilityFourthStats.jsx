import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStats = props => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>
                     {props.fourthSpellsDetails[0].abilitySpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStats;
