import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityStatsRight = ({ posts }) => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textAbilityRight}>
            PIERCES SPELL IMMUNITY:
         </div>

         <div className={classAbaddonPage.spanAbilityRight}>
            {posts[0].firstSpellsDetails[0].immunitySpell}
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  SELF DAMAGE:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].selfDamageSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DAMAGE/HEAL:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].DamageOrHealSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CAST RANGE:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].firstSpellsDetails[0].rangeSpell}
                  </span>
               </div>

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
