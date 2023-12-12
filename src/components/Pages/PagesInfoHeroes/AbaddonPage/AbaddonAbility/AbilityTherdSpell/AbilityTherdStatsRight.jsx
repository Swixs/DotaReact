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
                  BASIC DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].durationSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  BASIC SLOW:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].basicSlowSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CURSE DURATION:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].curseDurationSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CURSE SLOW:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].curseSlowSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CURSE ATTACK SPEED:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {posts[0].thirdSpellsDetails[0].curseAttackSpeedSpell}
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
