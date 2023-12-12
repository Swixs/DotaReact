import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondLineInfo = ({ posts }) => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src={posts[0].spellsImg[0].secondSpell}
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  {posts[0].secondSpellsDetails[0].nameSpell}
               </div>

               <div className={classAbaddonPage.textSpellSecond}>
                  {posts[0].secondSpellsDetails[0].textSpell}
               </div>
               <div className={classAbaddonPage.brDiv}>
                  {posts[0].secondSpellsDetails[0].subtextSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondLineInfo;
