import classPage from '../../HeroPage.module.css';

const AbilityStatsRight = ({ posts }) => {
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
      <div className={classPage.abilityStatsRight}>
         <div className={classPage.textAbilityRight}>
            {posts[0].firstSpellsDetails[0].preImunitySpell}
         </div>

         <div className={classPage.spanAbilityRight}>
            {posts[0].firstSpellsDetails[0].immunitySpell}
         </div>

         <div>
            <div className={classPage.statsAbilityBottom}>
               <div className={classPage.textAbilityBottom}>
                  {posts[0].firstSpellsDetails[0].preStatsSpellFirst}
                  <span className={classPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].statsSpellFirst}
                  </span>
               </div>
               <div className={classPage.textAbilityBottom}>
                  {posts[0].firstSpellsDetails[0].preStatsSpellSecond}
                  <span className={classPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].statsSpellSecond}
                  </span>
               </div>
               <div className={classPage.textAbilityBottom}>
                  {posts[0].firstSpellsDetails[0].preStatsSpellThird}
                  <span className={classPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].statsSpellThird}
                  </span>
               </div>
               {firstSpellDetails.preStatsSpellFourth && (
                  <div className={classPage.textAbilityBottom}>
                     {firstSpellDetails.preStatsSpellFourth}
                     <span className={classPage.spanAbilityBottom}>
                        {firstSpellDetails.statsSpellFourth}
                     </span>
                  </div>
               )}

               {firstSpellDetails.preStatsSpellFifth && (
                  <div className={classPage.textAbilityBottom}>
                     {firstSpellDetails.preStatsSpellFifth}
                     <span className={classPage.spanAbilityBottom}>
                        {firstSpellDetails.statsSpellFifth}
                     </span>
                  </div>
               )}

               {firstSpellDetails.preStatsSpellSixth && (
                  <div className={classPage.textAbilityBottom}>
                     {firstSpellDetails.preStatsSpellSixth}
                     <span className={classPage.spanAbilityBottom}>
                        {firstSpellDetails.statsSpellSixth}
                     </span>
                  </div>
               )}

               {firstSpellDetails.preStatsSpellSeventh && (
                  <div className={classPage.textAbilityBottom}>
                     {firstSpellDetails.preStatsSpellSeventh}
                     <span className={classPage.spanAbilityBottom}>
                        {firstSpellDetails.statsSpellSeventh}
                     </span>
                  </div>
               )}

               {firstSpellDetails.timeLogoSpell &&
                  firstSpellDetails.timeSpell && (
                     <div className={classPage.linetimeSpell}>
                        <img
                           src={firstSpellDetails.timeLogoSpell}
                           alt="timeSpell"
                           className={classPage.timeSpellPict}
                        />
                        <div className={classPage.timeSpellStats}>
                           {firstSpellDetails.timeSpell}
                        </div>
                     </div>
                  )}

               {firstSpellDetails.manaSpell && (
                  <div className={classPage.lineDisplay}>
                     <div className={classPage.manaBlock}></div>
                     <div className={classPage.manaText}>
                        {firstSpellDetails.manaSpell}
                     </div>
                  </div>
               )}

               <div
                  className={
                     posts[0].firstSpellsDetails[0].historyStyle ||
                     classPage.historyFirstSpell
                  }
               >
                  {posts[0].firstSpellsDetails[0].historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityStatsRight;
