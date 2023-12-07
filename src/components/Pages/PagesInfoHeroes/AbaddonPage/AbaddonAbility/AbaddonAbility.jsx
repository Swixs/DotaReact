import classAbaddonPage from '../AbaddonPage.module.css';
import AbaddoneAbilityLeft from './AbaddonAbilityLeft';

const AbaddoneAbility = props => {
   return (
      <div className={classAbaddonPage.pageAbility}>
         <div className={classAbaddonPage.titleAbility}>ABILITY DETAILS:</div>

         <div>
            <AbaddoneAbilityLeft
               videoSpells={props.videoSpells}
               spellsImg={props.spellsImg}
               firstSpellsDetails={props.firstSpellsDetails}
            />
         </div>
      </div>
   );
};

export default AbaddoneAbility;
