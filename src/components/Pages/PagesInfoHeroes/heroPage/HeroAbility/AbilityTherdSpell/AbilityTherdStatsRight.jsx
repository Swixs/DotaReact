import classPage from '../../HeroPage.module.css';

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
            thirdSpellDetails.abilityStatsRight || classPage.abilityStatsRight
         }
      >
         <div className={classPage.textSecondAbilityRight}>
            {thirdSpellDetails.preImmunitySpell} {thirdSpellDetails.preDisable}
         </div>

         {thirdSpellDetails.dissableSpell && (
            <div className={classPage.spanFirstAbilityRight}>
               {thirdSpellDetails.dissableSpell}
            </div>
         )}

         {thirdSpellDetails.immunitySpell && (
            <div
               className={
                  thirdSpellDetails.classImunitySpell ||
                  classPage.spanSecondAbilityRight
               }
            >
               {thirdSpellDetails.immunitySpell}
            </div>
         )}

         <div>
            <div className={classPage.statsAbilityBottom}>
               <div className={classPage.textAbilityBottom}>
                  {thirdSpellDetails.preStatsSpellFirst}
                  <span className={classPage.spanAbilityBottom}>
                     {thirdSpellDetails.statsSpellFirst}
                  </span>
               </div>
               {thirdSpellDetails.preStatsSpellSecond && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellSecond}
                     <span className={classPage.spanAbilityBottom}>
                        {thirdSpellDetails.statsSpellSecond}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellFourth && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellThird}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellThird}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellFourth && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellFourth}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellFourth}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellFifth && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellFifth}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellFifth}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellSixth && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellSixth}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellSixth}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellSeventh && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellSeventh}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellSeventh}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellEights && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellEights}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellEights}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellNines && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellNines}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellNines}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellTens && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellTens}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellTens}
                     </span>
                  </div>
               )}
               {thirdSpellDetails.preStatsSpellElevens && (
                  <div className={classPage.textAbilityBottom}>
                     {thirdSpellDetails.preStatsSpellElevens}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {thirdSpellDetails.statsSpellElevens}
                     </span>
                  </div>
               )}

               {thirdSpellDetails.timeSpell && thirdSpellDetails.manaSpell && (
                  <div>
                     <div className={classPage.linetimeSpell}>
                        <img
                           src={thirdSpellDetails.timeLogoSpell}
                           alt="timeSpell"
                           className={classPage.timeSpellPict}
                        />
                        <div className={classPage.timeSpellStats}>
                           {thirdSpellDetails.timeSpell}
                        </div>
                     </div>

                     <div className={classPage.lineDisplay}>
                        <div className={classPage.manaBlock}></div>
                        <div className={classPage.manaText}>
                           {thirdSpellDetails.manaSpell}
                        </div>
                     </div>
                  </div>
               )}

               {thirdSpellDetails.historySpell ? (
                  <div className={classPage.historyFirstSpell}>
                     {thirdSpellDetails.historySpell}
                  </div>
               ) : (
                  <div className={classPage.historyFirstSpell}></div>
               )}
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStatsRight;
