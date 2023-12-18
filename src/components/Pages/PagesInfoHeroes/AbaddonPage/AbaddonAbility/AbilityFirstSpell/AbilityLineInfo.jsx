import classAbaddonPage from '../../AbaddonPage.module.css';

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
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src={posts[0].spellsImg[0].firstSpell}
               alt="firstSpell"
            />
            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  {firstSpellDetails.nameSpell}
               </div>
               <div className={classAbaddonPage.textSpell}>
                  {firstSpellDetails.textSpell}
               </div>
               {firstSpellDetails.subtextSpell && (
                  <div className={classAbaddonPage.brDiv}>
                     <br />
                     {firstSpellDetails.subtextSpell}
                  </div>
               )}
               {firstSpellDetails.secondSubtextSpell && (
                  <div className={classAbaddonPage.brDiv}>
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
