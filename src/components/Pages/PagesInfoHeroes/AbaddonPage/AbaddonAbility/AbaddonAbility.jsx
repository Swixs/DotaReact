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
               secondSpellsDetails={props.secondSpellsDetails}
               thirdSpellsDetails={props.thirdSpellsDetails}
               fourthSpellsDetails={props.fourthSpellsDetails}
            />
         </div>
      </div>
   );
};

export default AbaddoneAbility;
