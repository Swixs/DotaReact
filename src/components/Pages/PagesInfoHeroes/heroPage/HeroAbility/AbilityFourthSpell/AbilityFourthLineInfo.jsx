import classPage from '../../../../../style/HeroPage.module.css';

const AbilityFourthLineInfo = ({ posts }) => {
   return (
      <div>
         <div className={classPage.lineDisplay}>
            <img
               className={classPage.pictureSpell}
               src={posts[0].spellsImg[0].fourthSpell}
               alt="firstSpell"
            />

            <div className={classPage.displayColumn}>
               <div className={classPage.nameSpell}>
                  {posts[0].fourthSpellsDetails[0].nameSpell}
               </div>

               <div className={classPage.textSpellSecond}>
                  {posts[0].fourthSpellsDetails[0].textSpell}
               </div>

               <div className={classPage.brDiv}>
                  {posts[0].fourthSpellsDetails[0].subtextSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthLineInfo;
