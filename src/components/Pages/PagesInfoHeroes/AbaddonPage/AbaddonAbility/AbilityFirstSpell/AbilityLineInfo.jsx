import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityLineInfo = ({ posts }) => {
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
                  {posts[0].firstSpellsDetails[0].nameSpell}
               </div>
               <div className={classAbaddonPage.textSpell}>
                  {posts[0].firstSpellsDetails[0].textSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityLineInfo;
