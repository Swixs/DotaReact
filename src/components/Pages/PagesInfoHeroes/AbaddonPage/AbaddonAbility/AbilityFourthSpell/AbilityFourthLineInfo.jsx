import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthLineInfo = props => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src={props.spellsImg[0].fourthSpell}
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  {props.fourthSpellsDetails[0].nameSpell}
               </div>

               <div className={classAbaddonPage.textSpellSecond}>
                  {props.fourthSpellsDetails[0].textSpell}
               </div>

               <div className={classAbaddonPage.brDiv}>
                  {props.fourthSpellsDetails[0].subtextSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthLineInfo;
