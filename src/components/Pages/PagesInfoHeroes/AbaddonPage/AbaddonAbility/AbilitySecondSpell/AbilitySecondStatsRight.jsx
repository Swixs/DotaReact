import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondStatsRight = props => {
   return (
      <div className={classAbaddonPage.abilityStatsRight}>
         <div className={classAbaddonPage.textSecondAbilityRight}>
            PIERCES SPELL IMMUNITY: DISABLE:
         </div>

         <div className={classAbaddonPage.spanFirstAbilityRight}>
            {props.secondSpellsDetails[0].dissableSpell}
         </div>
         <div className={classAbaddonPage.spanSecondAbilityRight}>
            {props.secondSpellsDetails[0].immunitySpell}
         </div>

         <div>
            <div className={classAbaddonPage.statsAbilityBottom}>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DURATION:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {props.secondSpellsDetails[0].durationSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  BURST RADIUS:
                  <span className={classAbaddonPage.spanAbilityBottom}>
                     {props.secondSpellsDetails[0].burstRadiusSpell}
                  </span>
               </div>
               <div className={classAbaddonPage.textAbilityBottom}>
                  DAMAGE BARRIER:
                  <span className={classAbaddonPage.spanSecondAbilityBottom}>
                     {props.secondSpellsDetails[0].barrierSpell}
                  </span>
               </div>

               <div className={classAbaddonPage.linetimeSpell}>
                  <img
                     src={props.secondSpellsDetails[0].timeLogoSpell}
                     alt="timeSpell"
                     className={classAbaddonPage.timeSpellPict}
                  />

                  <div className={classAbaddonPage.timeSpellStats}>
                     {props.secondSpellsDetails[0].timeSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.lineDisplay}>
                  <div className={classAbaddonPage.manaBlock}></div>
                  <div className={classAbaddonPage.manaText}>
                     {props.secondSpellsDetails[0].manaSpell}
                  </div>
               </div>

               <div className={classAbaddonPage.historySpell}>
                  {props.secondSpellsDetails[0].historySpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondStatsRight;
