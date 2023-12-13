import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityStats = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].firstSpellsDetails ||
      !posts[0].firstSpellsDetails[0]
   ) {
      return null;
   }

   const firstSpellDetails = posts[0].firstSpellsDetails[0];

   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  {firstSpellDetails.firstInfoSpell}
                  <span className={classAbaddonPage.spanAbility}>
                     {firstSpellDetails.firstStatsInfoSpell}
                  </span>
               </div>
            </div>

            {firstSpellDetails.secondInfoSpell && (
               <div>
                  <div className={classAbaddonPage.textAbility}>
                     {firstSpellDetails.secondInfoSpell}
                     <span className={classAbaddonPage.spanAbility}>
                        {firstSpellDetails.secondStatsInfoSpell}
                     </span>
                  </div>
               </div>
            )}

            <div>
               <div className={classAbaddonPage.textAbility}>
                  {firstSpellDetails.thirdInfoSpell}
                  <span className={firstSpellDetails.colorTextSpell}>
                     {firstSpellDetails.thirdStatsInfoSpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityStats;
