import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdStatsRight = ({ posts }) => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>
            PIERCES SPELL IMMUNITY: DISABLE:
         </div>

         <div className={classAbaddonPage.spanFirstAbilityRight}>
            {posts[0].thirdSpellsDetails[0].dissableSpell}
         </div>
         <div className={classAbaddonPage.spanSecondAbilityRight}>
            {posts[0].thirdSpellsDetails[0].immunitySpell}
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].thirdSpellsDetails[0].preStatsSpellFirst}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].statsSpellFirst}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].thirdSpellsDetails[0].preStatsSpellSecond}
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].statsSpellSecond}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].thirdSpellsDetails[0].preStatsSpellThird}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].statsSpellThird}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].thirdSpellsDetails[0].preStatsSpellFourth}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].statsSpellFourth}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  {posts[0].thirdSpellsDetails[0].preStatsSpellFifth}
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].statsSpellFifth}
                  </span>
               </div>

               <div className={classAbaddonPage.historyFirstSpell}>
                  {posts[0].thirdSpellsDetails[0].historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStatsRight;
