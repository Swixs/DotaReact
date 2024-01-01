import classPage from '../../../../../style/HeroPage.module.css';

const AbilityStats = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].firstSpellsDetails ||
      !posts[0].firstSpellsDetails[0]
   ) {
      return <div></div>;
   }

   const firstSpellDetails = posts[0].firstSpellsDetails[0];

   return (
      <div>
         <div className={classPage.abilityStats}>
            <div>
               <div className={classPage.textAbility}>
                  {firstSpellDetails.firstInfoSpell}
                  <span className={classPage.spanAbility}>
                     {firstSpellDetails.firstStatsInfoSpell}
                  </span>
               </div>
            </div>

            {firstSpellDetails.secondInfoSpell && (
               <div>
                  <div className={classPage.textAbility}>
                     {firstSpellDetails.secondInfoSpell}
                     <span className={classPage.spanAbility}>
                        {firstSpellDetails.secondStatsInfoSpell}
                     </span>
                  </div>
               </div>
            )}

            <div>
               <div className={classPage.textAbility}>
                  {firstSpellDetails.thirdInfoSpell}
                  <span className={firstSpellDetails.colorTextSpell}>
                     {firstSpellDetails.thirdStatsInfoSpell}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityStats;
