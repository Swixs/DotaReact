import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdStats = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].thirdSpellsDetails ||
      !posts[0].thirdSpellsDetails[0]
   ) {
      return null;
   }

   const thirdSpellDetails = posts[0].thirdSpellsDetails[0];

   return (
      <div>
         <div className={classAbaddonPage.abilityStats}>
            <div>
               <div className={classAbaddonPage.textAbility}>
                  {thirdSpellDetails.firstInfoSpell}
                  <span className={classAbaddonPage.spanAbility}>
                     {thirdSpellDetails.firstStatsInfoSpell}
                  </span>
               </div>

               {thirdSpellDetails.secondInfoSpell &&
                  thirdSpellDetails.secondStatsInfoSpell && (
                     <div className={classAbaddonPage.textAbility}>
                        {thirdSpellDetails.secondInfoSpell}
                        <span className={classAbaddonPage.spanAbility}>
                           {thirdSpellDetails.secondStatsInfoSpell}
                        </span>
                     </div>
                  )}

               {thirdSpellDetails.thirdInfoSpell &&
                  thirdSpellDetails.thirdStatsInfoSpell && (
                     <div className={classAbaddonPage.textAbility}>
                        {thirdSpellDetails.thirdInfoSpell}
                        <span
                           className={
                              thirdSpellDetails.colorTextSpell ||
                              classAbaddonPage.spanAbility
                           }
                        >
                           {thirdSpellDetails.thirdStatsInfoSpell}
                        </span>
                        <br></br>
                     </div>
                  )}
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdStats;
