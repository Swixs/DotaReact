import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondStatsRight = ({ posts }) => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>
            PIERCES SPELL IMMUNITY:{' '}
            {posts[0].secondSpellsDetails[0].preDisableSpell}
         </div>

         <div className={classAbaddonPage.spanFirstAbilityRight}>
            {posts[0].secondSpellsDetails[0].dissableSpell}
         </div>
         <div className={classAbaddonPage.spanSecondAbilityRight}>
            {posts[0].secondSpellsDetails[0].immunitySpell}
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].secondSpellsDetails[0].preStatsSpellFirst}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].secondSpellsDetails[0].statsSpellFirst}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].secondSpellsDetails[0].preStatsSpellSecond}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].secondSpellsDetails[0].statsSpellSecond}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].secondSpellsDetails[0].preStatsSpellThird}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].secondSpellsDetails[0].statsSpellThird}
                  </span>
               </div>

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src={posts[0].secondSpellsDetails[0].timeLogoSpell}
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     {posts[0].secondSpellsDetails[0].timeSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>
                     {posts[0].secondSpellsDetails[0].manaSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.historySpell}>
                  {posts[0].secondSpellsDetails[0].historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondStatsRight;
