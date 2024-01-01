import classPage from '../../HeroPage.module.css';

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
      <div className={classPage.height}>
         <div className={classPage.abilityStats}>
            {secondSpellDetails.firstInfoSpell && (
               <div>
                  <div className={classPage.textAbility}>
                     {secondSpellDetails.firstInfoSpell}
                     <span className={classPage.spanAbility}>
                        {secondSpellDetails.firstStatsInfoSpell}
                     </span>
                  </div>
               </div>
            )}
            {secondSpellDetails.secondInfoSpell && (
               <div>
                  <div className={classPage.textAbility}>
                     {secondSpellDetails.secondInfoSpell}
                     <span className={classPage.spanAbility}>
                        {secondSpellDetails.secondStatsInfoSpell}
                     </span>
                  </div>
               </div>
            )}
            {secondSpellDetails.thirdInfoSpell && (
               <div>
                  <div className={classPage.textAbility}>
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
