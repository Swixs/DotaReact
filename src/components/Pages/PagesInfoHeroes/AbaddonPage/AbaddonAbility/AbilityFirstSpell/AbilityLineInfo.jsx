import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityLineInfo = props => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src={props.spellsImg[0].firstSpell}
               alt="firstSpell"
            />
            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  {props.firstSpellsDetails[0].nameSpell}
               </div>
               <div className={classAbaddonPage.textSpell}>
                  {props.firstSpellsDetails[0].textSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityLineInfo;
