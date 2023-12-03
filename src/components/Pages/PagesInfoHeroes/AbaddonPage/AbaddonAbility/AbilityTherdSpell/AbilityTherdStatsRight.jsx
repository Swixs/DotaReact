import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdStatsRight = () => {
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
                  BASIC DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     5.0
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  BASIC SLOW:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     10.0% / 15.0% / 20.0% / 25.0%
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CURSE DURATION:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     4.5
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CURSE SLOW:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     15.0% / 30.0% / 45.0% / 60.0%
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  CURSE ATTACK SPEED:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     60.0 / 80.0 / 100.0 / 120.0
                  </span>
               </div>

               <div className={classAbaddonPage.historyFirstSpell}>
                  While the baptized draw strength from the Font, the gifts of
                  Avernus are debilitating to the uninitiated.
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStatsRight;
