import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondStatsRight = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].secondSpellsDetails ||
      !posts[0].secondSpellsDetails[0]
   ) {
      return null;
   }

   const secondSpellDetails = posts[0].secondSpellsDetails[0];

   return (
      <div
         className={
            secondSpellDetails.classTextAbilityRightSecond ||
            classAbaddonPage.abilityStatsRight
         }
      >
         <div className={classAbaddonPage.textSecondAbilityRight}>
            {secondSpellDetails.preImunitySpell}{' '}
            {secondSpellDetails.preDisableSpell}
         </div>

         {secondSpellDetails.dissableSpell && (
            <div className={classAbaddonPage.spanFirstAbilityRight}>
               {secondSpellDetails.dissableSpell}
            </div>
         )}

         {secondSpellDetails.immunitySpell && (
            <div className={classAbaddonPage.spanSecondAbilityRight}>
               {secondSpellDetails.immunitySpell}
            </div>
         )}

         <div>
            <div
               className={
                  secondSpellDetails.classStatsRight ||
                  classAbaddonPage.statsAbilityBottom
               }
            >
               <div className={classAbaddonPage.textAbilityBottom}>
                  {secondSpellDetails.preStatsSpellFirst}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {secondSpellDetails.statsSpellFirst}
                  </span>
               </div>

               {secondSpellDetails.preStatsSpellSecond && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellSecond}
                     <span className={classAbaddonPage.spanAbilityBottom}>
                        {secondSpellDetails.statsSpellSecond}
                     </span>
                  </div>
               )}

               {secondSpellDetails.preStatsSpellThird && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellThird}
                     <span className={classAbaddonPage.spanSecondAbilityBottom}>
                        {secondSpellDetails.statsSpellThird}
                     </span>
                  </div>
               )}

               {secondSpellDetails.preStatsSpellFourth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellFourth}
                     <span className={classAbaddonPage.spanAbilityBottom}>
                        {secondSpellDetails.statsSpellFourth}
                     </span>
                  </div>
               )}

               {secondSpellDetails.preStatsSpellFifth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellFifth}
                     <span className={classAbaddonPage.spanAbilityBottom}>
                        {secondSpellDetails.statsSpellFifth}
                     </span>
                  </div>
               )}

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src={secondSpellDetails.timeLogoSpell}
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />
                  <div className={classAbaddonPage.timeSpellStats}>
                     {secondSpellDetails.timeSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>
                     {secondSpellDetails.manaSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.historySpell}>
                  {secondSpellDetails.historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondStatsRight;
