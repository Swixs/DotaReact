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
      <div
         className={
            thirdSpellDetails.abilityStatsRight ||
            classAbaddonPage.abilityStatsRight
         }
      >
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
               {thirdSpellDetails.preStatsSpellSecond && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellSecond}
                     <span className={classAbaddonPage.spanAbilityBottom}>
                        {thirdSpellDetails.statsSpellSecond}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellFourth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellThird}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellThird}
                     </span>
                  </div>
               )}
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
               {thirdSpellDetails.preStatsSpellSixth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellSixth}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellSixth}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellSeventh && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellSeventh}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellSeventh}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellEights && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellEights}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellEights}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellNines && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellNines}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellNines}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellTens && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellTens}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellTens}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellElevens && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellElevens}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellElevens}
                     </span>
                  </div>
               )}

               {thirdSpellDetails.timeSpell && thirdSpellDetails.manaSpell && (
                  <div>
                     <div className={classAbaddonPage.linetimeSpell}>
                        <img
                           src={thirdSpellDetails.timeLogoSpell}
                           alt="timeSpell"
                           className={classAbaddonPage.timeSpellPict}
                        />
                        <div className={classAbaddonPage.timeSpellStats}>
                           {thirdSpellDetails.timeSpell}
                        </div>
                     </div>

                     <div className={classAbaddonPage.lineDisplay}>
                        <div className={classAbaddonPage.manaBlock}></div>
                        <div className={classAbaddonPage.manaText}>
                           {thirdSpellDetails.manaSpell}
                        </div>
                     </div>
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
