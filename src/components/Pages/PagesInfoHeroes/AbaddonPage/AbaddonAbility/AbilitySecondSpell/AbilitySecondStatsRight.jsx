import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondStatsRight = () => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>
            PIERCES SPELL IMMUNITY: DISABLE:
         </div>

         <div className={classAbaddonPage.spanFirstAbilityRight}>Yes</div>
         <div className={classAbaddonPage.spanSecondAbilityRight}>No</div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     15.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  BURST RADIUS:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     675.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DAMAGE BARRIER:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     120.0 / 150.0 / 180.0 / 210.0
                  </span>
               </div>

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png"
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     12.0 / 10.0 / 8.0 / 6.0
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>
                     95 / 110 / 125 / 140
                  </div>
               </div>

               <div className={classAbaddonPage.historySpell}>
                  The powers of the black mist rise to absorb attacks like the
                  black mist absorbs light.
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondStatsRight;
