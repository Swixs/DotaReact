import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdLineInfo = props => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src={props.spellsImg[0].thirdSpell}
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  {props.thirdSpellsDetails[0].nameSpell}
               </div>

               <div className={classAbaddonPage.textSpellSecond}>
                  {props.thirdSpellsDetails[0].textSpell}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdLineInfo;
