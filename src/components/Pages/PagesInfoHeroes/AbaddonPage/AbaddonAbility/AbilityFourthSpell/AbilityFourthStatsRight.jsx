import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStatsRight = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].fourthSpellsDetails ||
      !posts[0].fourthSpellsDetails[0]
   ) {
      return null;
   }

   const fourthSpellDetails = posts[0].fourthSpellsDetails[0];

   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         {fourthSpellDetails.preImmunitySpell && (
            <div className={classAbaddonPage.textSecondAbilityRight}>
               {fourthSpellDetails.preImmunitySpell}
            </div>
         )}

         {fourthSpellDetails.immunitySpell && (
            <div
               className={
                  fourthSpellDetails.classFromSubTextSpell ||
                  classAbaddonPage.spanFourthAbilityRight
               }
            >
               {fourthSpellDetails.immunitySpell}
            </div>
         )}

         {fourthSpellDetails.preDissableSpell && (
            <div
               className={
                  fourthSpellDetails.classFromTextSpell ||
                  classAbaddonPage.textSecondAbilityRight
               }
            >
               {fourthSpellDetails.preDissableSpell}
            </div>
         )}

         {fourthSpellDetails.dissableSpell && (
            <div className={classAbaddonPage.spanFourthAbilityRight}>
               {fourthSpellDetails.dissableSpell}
            </div>
         )}

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellFirst}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {fourthSpellDetails.statsSpellFirst}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellSecond}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {fourthSpellDetails.statsSpellSecond}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellThird}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {fourthSpellDetails.statsSpellThird}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellFourth}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {fourthSpellDetails.statsSpellFourth}
                  </span>
               </div>
               {fourthSpellDetails.preStatsSpellFifth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {fourthSpellDetails.preStatsSpellFifth}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {fourthSpellDetails.statsSpellFifth}
                     </span>
                  </div>
               )}
               {fourthSpellDetails.preStatsSpellSixth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {fourthSpellDetails.preStatsSpellSixth}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {fourthSpellDetails.statsSpellSixth}
                     </span>
                  </div>
               )}

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src={fourthSpellDetails.timeLogoSpell}
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     {fourthSpellDetails.timeSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>
                     {fourthSpellDetails.manaSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.historyFourthSpell}>
                  {fourthSpellDetails.historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStatsRight;
