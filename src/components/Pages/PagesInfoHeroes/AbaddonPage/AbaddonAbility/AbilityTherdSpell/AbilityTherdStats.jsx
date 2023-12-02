import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdStats = () => {
   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  ABILITY:
                  <span className={classAbaddonPage.spanAbility}>Passive</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStats;
