import React, { useState } from 'react';
import AbilityVideo from './AbaddonAbilityVideo';
import AbilityButtons from './AbilityButtons';
import classAbaddonPage from '../AbaddonPage.module.css';
import AbilityFirstSpell from './AbilityFirstSpell/AbilityFirstSpellContent';
import AbilitySecondSpell from './AbilitySecondSpell/AbilitySecondContent';

const AbaddoneAbilityLeft = () => {
   const [selectedAbility, setSelectedAbility] = useState(null);

   const selectAbility = ability => {
      setSelectedAbility(ability);
   };

   return (
      <div className={classAbaddonPage.pageFlex}>
         <AbilityVideo selectedAbility={selectedAbility} />
         <div className={classAbaddonPage.pageContent}>
            <AbilityButtons onSelectAbility={selectAbility} />
            <div className={classAbaddonPage.abilitiesInfo}>
               {selectedAbility === 'ability1' && <AbilityFirstSpell />}
               {selectedAbility === 'ability2' && <AbilitySecondSpell />}
            </div>
         </div>
      </div>
   );
};

export default AbaddoneAbilityLeft;