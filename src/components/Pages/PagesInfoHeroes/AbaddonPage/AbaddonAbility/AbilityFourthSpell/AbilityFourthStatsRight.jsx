import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthStatsRight = () => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>DISABLE:</div>

         <div className={classAbaddonPage.spanFourthAbilityRight}>No</div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  HEALTH THRESHOLD:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     400.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     4.0 / 5.0 / 6.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     7.0 / 8.0 / 9.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DAMAGE THRESHOLD:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     525.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  RANGE:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     1200.0
                  </span>
               </div>

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png"
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     70.0 / 60.0 / 50.0
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>0 / 0 / 0</div>
               </div>

               <div className={classAbaddonPage.historyFourthSpell}>
                  The most unnatural of all the gifts of the Font of Avernus,
                  this power defies mortal understanding. What should hurt,
                  instead heals; and what should kill gives strength anew.
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthStatsRight;
