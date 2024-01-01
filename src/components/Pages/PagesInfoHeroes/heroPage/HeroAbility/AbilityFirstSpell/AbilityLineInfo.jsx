import classPage from '../../HeroPage.module.css';

const AbilityLineInfo = ({ posts }) => {
   if (
      !posts ||
      !posts[0] ||
      !posts[0].firstSpellsDetails ||
      !posts[0].firstSpellsDetails[0]
   ) {
      return null;
   }

   const firstSpellDetails = posts[0].firstSpellsDetails[0];

   return (
      <div>
         <div className={classPage.lineDisplay}>
            <img
               className={classPage.pictureSpell}
               src={posts[0].spellsImg[0].firstSpell}
               alt="firstSpell"
            />
            <div className={classPage.displayColumn}>
               <div className={classPage.nameSpell}>
                  {firstSpellDetails.nameSpell}
               </div>
               <div className={classPage.textSpell}>
                  {firstSpellDetails.textSpell}
               </div>
               {firstSpellDetails.subtextSpell && (
                  <div className={classPage.brDiv}>
                     <br />
                     {firstSpellDetails.subtextSpell}
                  </div>
               )}
               {firstSpellDetails.secondSubtextSpell && (
                  <div className={classPage.brDiv}>
                     <br />
                     {firstSpellDetails.secondSubtextSpell}
                  </div>
               )}
               <br />
            </div>
         </div>
      </div>
   );
};

export default AbilityLineInfo;
