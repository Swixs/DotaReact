import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStatsRight = ({ posts }) => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>DISABLE:</div>

         <div className={classAbaddonPage.spanFourthAbilityRight}>
            {posts[0].fourthSpellsDetails[0].dissableSpell}
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  HEALTH THRESHOLD:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].healthSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].durationSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].secondDurationSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DAMAGE THRESHOLD:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].damageSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  RANGE:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].fourthSpellsDetails[0].rangeSpell}
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
