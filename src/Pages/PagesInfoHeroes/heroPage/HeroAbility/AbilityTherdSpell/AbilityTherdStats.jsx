import classPage from '../../../../../style/HeroPage.module.css';

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
         <div
            className={thirdSpellDetails.abilityStats || classPage.abilityStats}
         >
            <div>
               <div className={classPage.textAbility}>
                  {thirdSpellDetails.firstInfoSpell}
                  <span className={classPage.spanAbility}>
                     {thirdSpellDetails.firstStatsInfoSpell}
                  </span>
               </div>

               {thirdSpellDetails.secondInfoSpell &&
                  thirdSpellDetails.secondStatsInfoSpell && (
                     <div className={classPage.textAbility}>
                        {thirdSpellDetails.secondInfoSpell}
                        <span
                           className={
                              thirdSpellDetails.colorTextSpell ||
                              classPage.spanAbility
                           }
                        >
                           {thirdSpellDetails.secondStatsInfoSpell}
                        </span>
                     </div>
                  )}

               {thirdSpellDetails.thirdInfoSpell &&
                  thirdSpellDetails.thirdStatsInfoSpell && (
                     <div className={classPage.textAbility}>
                        {thirdSpellDetails.thirdInfoSpell}
                        <span
                           className={
                              thirdSpellDetails.colorTextSpell ||
                              classPage.spanAbility
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
