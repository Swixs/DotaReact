import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondLineInfo = props => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src={props.spellsImg[0].secondSpell}
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  {props.secondSpellsDetails[0].nameSpell}
               </div>

               <div className={classAbaddonPage.textSpellSecond}>
                  {props.secondSpellsDetails[0].textSpell}
               </div>
               <div className={classAbaddonPage.brDiv}>
                  {props.secondSpellsDetails[0].subtextSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondLineInfo;
