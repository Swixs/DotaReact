import classPage from '../../../../../style/HeroPage.module.css';

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
            classPage.abilityStatsRight
         }
      >
         <div className={classPage.textSecondAbilityRight}>
            {secondSpellDetails.preImunitySpell}{' '}
            {secondSpellDetails.preDisableSpell}
         </div>

         {secondSpellDetails.dissableSpell && (
            <div className={classPage.spanFirstAbilityRight}>
               {secondSpellDetails.dissableSpell}
            </div>
         )}

         {secondSpellDetails.immunitySpell && (
            <div className={classPage.spanSecondAbilityRight}>
               {secondSpellDetails.immunitySpell}
            </div>
         )}

         <div>
            <div
               className={
                  secondSpellDetails.classStatsRight ||
                  classPage.statsAbilityBottom
               }
            >
               <div className={classPage.textAbilityBottom}>
                  {secondSpellDetails.preStatsSpellFirst}
                  <span className={classPage.spanAbilityBottom}>
                     {secondSpellDetails.statsSpellFirst}
                  </span>
               </div>

               {secondSpellDetails.preStatsSpellSecond && (
                  <div className={classPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellSecond}
                     <span className={classPage.spanAbilityBottom}>
                        {secondSpellDetails.statsSpellSecond}
                     </span>
                  </div>
               )}

               {secondSpellDetails.preStatsSpellThird && (
                  <div className={classPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellThird}
                     <span className={classPage.spanSecondAbilityBottom}>
                        {secondSpellDetails.statsSpellThird}
                     </span>
                  </div>
               )}

               {secondSpellDetails.preStatsSpellFourth && (
                  <div className={classPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellFourth}
                     <span className={classPage.spanAbilityBottom}>
                        {secondSpellDetails.statsSpellFourth}
                     </span>
                  </div>
               )}

               {secondSpellDetails.preStatsSpellFifth && (
                  <div className={classPage.textAbilityBottom}>
                     {secondSpellDetails.preStatsSpellFifth}
                     <span className={classPage.spanAbilityBottom}>
                        {secondSpellDetails.statsSpellFifth}
                     </span>
                  </div>
               )}

               <div className={classPage.linetimeSpell}>
                  <img
                     src={secondSpellDetails.timeLogoSpell}
                     alt="timeSpell"
                     className={classPage.timeSpellPict}
                  />
                  <div className={classPage.timeSpellStats}>
                     {secondSpellDetails.timeSpell}
                  </div>
               </div>

               <div className={classPage.lineDisplay}>
                  <div className={classPage.manaBlock}></div>
                  <div className={classPage.manaText}>
                     {secondSpellDetails.manaSpell}
                  </div>
               </div>

               <div className={classPage.historySpell}>
                  {secondSpellDetails.historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondStatsRight;
