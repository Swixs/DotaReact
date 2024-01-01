import classPage from '../../HeroPage.module.css';

const AbilitySecondLineInfo = ({ posts }) => {
   return (
      <div>
         <div className={classPage.lineDisplay}>
            <img
               className={classPage.pictureSpell}
               src={posts[0].spellsImg[0].secondSpell}
               alt="firstSpell"
            />

            <div className={classPage.displayColumn}>
               <div className={classPage.nameSpell}>
                  {posts[0].secondSpellsDetails[0].nameSpell}
               </div>

               <div className={classPage.textSpellSecond}>
                  {posts[0].secondSpellsDetails[0].textSpell}
               </div>
               <div className={classPage.brDiv}>
                  {posts[0].secondSpellsDetails[0].subtextSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondLineInfo;
