import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondStats = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].secondSpellsDetails ||
      !posts[0].secondSpellsDetails[0]
   ) {
      return null;
   }

   const secondSpellDetails = posts[0].secondSpellsDetails[0];

   return (
      <div className={classAbaddonPage.height}>
         <div className={classAbaddonPage.abilityStats}>
            {secondSpellDetails.firstInfoSpell && (
               <div>
                  <div className={classAbaddonPage.textAbility}>
                     {secondSpellDetails.firstInfoSpell}
                     <span className={classAbaddonPage.spanAbility}>
                        {secondSpellDetails.firstStatsInfoSpell}
                     </span>
                  </div>
               </div>
            )}
            {secondSpellDetails.secondInfoSpell && (
               <div>
                  <div className={classAbaddonPage.textAbility}>
                     {secondSpellDetails.secondInfoSpell}
                     <span className={classAbaddonPage.spanAbility}>
                        {secondSpellDetails.secondStatsInfoSpell}
                     </span>
                  </div>
               </div>
            )}
            {secondSpellDetails.thirdInfoSpell && (
               <div>
                  <div className={classAbaddonPage.textAbility}>
                     {secondSpellDetails.thirdInfoSpell}
                     <span className={secondSpellDetails.colorTextSpell}>
                        {secondSpellDetails.thirdStatsInfoSpell}
                     </span>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default AbilitySecondStats;
