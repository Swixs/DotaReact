import classPage from '../../HeroPage.module.css';

const AbilityTherdLineInfo = ({ posts }) => {
   return (
      <div>
         <div className={classPage.lineDisplay}>
            <img
               className={classPage.pictureSpell}
               src={posts[0].spellsImg[0].thirdSpell}
               alt="firstSpell"
            />

            <div className={classPage.displayColumn}>
               <div className={classPage.nameSpell}>
                  {posts[0].thirdSpellsDetails[0].nameSpell}
               </div>

               <div className={classPage.textSpellSecond}>
                  {posts[0].thirdSpellsDetails[0].textSpell}
               </div>

               {posts[0].thirdSpellsDetails[0].subtextSpell && (
                  <div className={classPage.brDiv}>
                     <br />
                     {posts[0].thirdSpellsDetails[0].subtextSpell}
                  </div>
               )}

               {!posts[0].thirdSpellsDetails[0].subtextSpell && (
                  <div className={classPage.brDiv}>{null}</div>
               )}
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdLineInfo;
