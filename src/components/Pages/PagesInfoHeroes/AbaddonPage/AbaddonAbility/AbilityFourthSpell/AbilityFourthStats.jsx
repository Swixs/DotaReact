import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStats = () => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>
                     No Target
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStats;
