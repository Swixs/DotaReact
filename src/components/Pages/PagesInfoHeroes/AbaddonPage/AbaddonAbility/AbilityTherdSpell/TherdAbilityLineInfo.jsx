import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdLineInfo = ({ posts }) => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src={posts[0].spellsImg[0].thirdSpell}
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  {posts[0].thirdSpellsDetails[0].nameSpell}
               </div>

               <div className={classAbaddonPage.textSpellSecond}>
                  {posts[0].thirdSpellsDetails[0].textSpell}
               </div>

               {posts[0].thirdSpellsDetails[0].subtextSpell && (
                  <div className={classAbaddonPage.brDiv}>
                     <br />
                     {posts[0].thirdSpellsDetails[0].subtextSpell}
                  </div>
               )}

               {!posts[0].thirdSpellsDetails[0].subtextSpell && (
                  <div className={classAbaddonPage.brDiv}>{null}</div>
               )}
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdLineInfo;
