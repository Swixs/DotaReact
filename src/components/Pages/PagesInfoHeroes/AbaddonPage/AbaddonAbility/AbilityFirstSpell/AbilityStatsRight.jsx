import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityStatsRight = () => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textAbilityRight}>
            PIERCES SPELL IMMUNITY:
         </div>

         <div className={classAbaddonPage.spanAbilityRight}>
            Allies Yes Enemies No
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  SELF DAMAGE:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     40.0%
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DAMAGE/HEAL:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     100.0 / 175.0 / 250.0 / 325.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CAST RANGE:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     600.0 / 625.0 / 650.0 / 675.0
                  </span>
               </div>

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png"
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     6.5 / 6.0 / 5.5 / 5.0
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>50</div>
               </div>

               <div className={classAbaddonPage.historySpell}>
                  A mysterious vapor from the Font of Avernus now infuses the
                  breath of Abaddon, who releases it at will.
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityStatsRight;
