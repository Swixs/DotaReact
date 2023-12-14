import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdStatsRight = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].thirdSpellsDetails ||
      !posts[0].thirdSpellsDetails[0]
   ) {
      return null;
   }

   const thirdSpellDetails = posts[0].thirdSpellsDetails[0];

   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>
            {thirdSpellDetails.preImmunitySpell} {thirdSpellDetails.preDisable}
         </div>

         {thirdSpellDetails.dissableSpell && (
            <div className={classAbaddonPage.spanFirstAbilityRight}>
               {thirdSpellDetails.dissableSpell}
            </div>
         )}

         {thirdSpellDetails.immunitySpell && (
            <div
               className={
                  thirdSpellDetails.classImunitySpell ||
                  classAbaddonPage.spanSecondAbilityRight
               }
            >
               {thirdSpellDetails.immunitySpell}
            </div>
         )}

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {thirdSpellDetails.preStatsSpellFirst}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {thirdSpellDetails.statsSpellFirst}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {thirdSpellDetails.preStatsSpellSecond}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {thirdSpellDetails.statsSpellSecond}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {thirdSpellDetails.preStatsSpellThird}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {thirdSpellDetails.statsSpellThird}
                  </span>
               </div>
               {thirdSpellDetails.preStatsSpellFourth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellFourth}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellFourth}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellFifth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellFifth}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellFifth}
                     </span>
                  </div>
               )}

               {thirdSpellDetails.historySpell ? (
                  <div className={classAbaddonPage.historyFirstSpell}>
                     {thirdSpellDetails.historySpell}
                  </div>
               ) : (
                  <div className={classAbaddonPage.historyFirstSpell}></div>
               )}
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStatsRight;
