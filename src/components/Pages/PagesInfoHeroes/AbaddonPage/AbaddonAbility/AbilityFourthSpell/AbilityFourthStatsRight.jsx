import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStatsRight = ({ posts }) => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>
            {posts[0].fourthSpellsDetails[0].preDissableSpell}
         </div>

         <div className={classAbaddonPage.spanFourthAbilityRight}>
            {posts[0].fourthSpellsDetails[0].dissableSpell}
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].fourthSpellsDetails[0].preStatsSpellFirst}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].statsSpellFirst}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].fourthSpellsDetails[0].preStatsSpellSecond}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].statsSpellSecond}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].fourthSpellsDetails[0].preStatsSpellThird}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].statsSpellThird}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].fourthSpellsDetails[0].preStatsSpellFourth}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].statsSpellFourth}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].fourthSpellsDetails[0].preStatsSpellFifth}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].statsSpellFifth}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].fourthSpellsDetails[0].preStatsSpellSixth}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].statsSpellSixth}
                  </span>
               </div>

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src={posts[0].fourthSpellsDetails[0].timeLogoSpell}
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     {posts[0].fourthSpellsDetails[0].timeSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>
                     {posts[0].fourthSpellsDetails[0].manaSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.historyFourthSpell}>
                  {posts[0].fourthSpellsDetails[0].historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStatsRight;
