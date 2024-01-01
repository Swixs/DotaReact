import classPage from '../../HeroPage.module.css';

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
      <div
         className={
            fourthSpellDetails.classTextAbilityRightSecond ||
            classPage.abilityStatsRight
         }
      >
         {fourthSpellDetails.preImmunitySpell && (
            <div className={classPage.textSecondAbilityRight}>
               {fourthSpellDetails.preImmunitySpell}
            </div>
         )}

         {fourthSpellDetails.immunitySpell && (
            <div
               className={
                  fourthSpellDetails.classFromSubTextSpell ||
                  classPage.spanFourthAbilityRight
               }
            >
               {fourthSpellDetails.immunitySpell}
            </div>
         )}

         {fourthSpellDetails.preDissableSpell && (
            <div
               className={
                  fourthSpellDetails.classFromTextSpell ||
                  classPage.textSecondAbilityRight
               }
            >
               {fourthSpellDetails.preDissableSpell}
            </div>
         )}

         {fourthSpellDetails.dissableSpell && (
            <div
               className={
                  fourthSpellDetails.statsAbilityRight ||
                  classPage.spanFourthAbilityRight
               }
            >
               {fourthSpellDetails.dissableSpell}
            </div>
         )}

         <div>
            <div
               className={
                  fourthSpellDetails.statsAbility ||
                  classPage.statsAbilityBottom
               }
            >
               <div className={classPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellFirst}
                  <span className={classPage.spanAbilityBottom}>
                     {fourthSpellDetails.statsSpellFirst}
                  </span>
               </div>
               <div className={classPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellSecond}
                  <span className={classPage.spanAbilityBottom}>
                     {fourthSpellDetails.statsSpellSecond}
                  </span>
               </div>
               <div className={classPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellThird}
                  <span className={classPage.spanAbilityBottom}>
                     {fourthSpellDetails.statsSpellThird}
                  </span>
               </div>
               <div className={classPage.textAbilityBottom}>
                  {fourthSpellDetails.preStatsSpellFourth}
                  <span className={classPage.spanSecondAbilityBottom}>
                     {fourthSpellDetails.statsSpellFourth}
                  </span>
               </div>
               {fourthSpellDetails.preStatsSpellFifth && (
                  <div className={classPage.textAbilityBottom}>
                     {fourthSpellDetails.preStatsSpellFifth}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {fourthSpellDetails.statsSpellFifth}
                     </span>
                  </div>
               )}
               {fourthSpellDetails.preStatsSpellSixth && (
                  <div className={classPage.textAbilityBottom}>
                     {fourthSpellDetails.preStatsSpellSixth}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {fourthSpellDetails.statsSpellSixth}
                     </span>
                  </div>
               )}

               <div className={classPage.linetimeSpell}>
                  <img
                     src={fourthSpellDetails.timeLogoSpell}
                     alt="timeSpell"
                     className={classPage.timeSpellPict}
                  />

                  <div className={classPage.timeSpellStats}>
                     {fourthSpellDetails.timeSpell}
                  </div>
               </div>

               <div className={classPage.lineDisplay}>
                  <div className={classPage.manaBlock}></div>
                  <div className={classPage.manaText}>
                     {fourthSpellDetails.manaSpell}
                  </div>
               </div>

               <div className={classPage.historyFourthSpell}>
                  {fourthSpellDetails.historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStatsRight;
