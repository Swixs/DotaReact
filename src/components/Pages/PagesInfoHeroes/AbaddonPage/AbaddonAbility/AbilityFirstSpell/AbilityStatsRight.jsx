import classAbaddonPage from '../../AbaddonPage.module.css';

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
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textAbilityRight}>
            {posts[0].firstSpellsDetails[0].preImunitySpell}
         </div>

         <div className={classAbaddonPage.spanAbilityRight}>
            {posts[0].firstSpellsDetails[0].immunitySpell}
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].firstSpellsDetails[0].preStatsSpellFirst}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].statsSpellFirst}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].firstSpellsDetails[0].preStatsSpellSecond}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].statsSpellSecond}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].firstSpellsDetails[0].preStatsSpellThird}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].statsSpellThird}
                  </span>
               </div>
               {firstSpellDetails.preStatsSpellFourth && (
                  <div className={classAbaddonPage.textAbilityBottom}>
                     {firstSpellDetails.preStatsSpellFourth}
                     <span className={classAbaddonPage.spanAbilityBottom}>
                        {firstSpellDetails.statsSpellFourth}
                     </span>
                  </div>
               )}
               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src={posts[0].firstSpellsDetails[0].timeLogoSpell}
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     {posts[0].firstSpellsDetails[0].timeSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>
                     {posts[0].firstSpellsDetails[0].manaSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.historyFirstSpell}>
                  {posts[0].firstSpellsDetails[0].historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityStatsRight;
