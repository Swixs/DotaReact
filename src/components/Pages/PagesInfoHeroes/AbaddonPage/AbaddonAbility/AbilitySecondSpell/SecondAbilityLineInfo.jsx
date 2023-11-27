import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilitySecondLineInfo = () => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png"
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>APHOTIC SHIELD</div>

               <div className={classAbaddonPage.textSpellSecond}>
                  Summons dark energies around an ally unit, creating an all
                  damage barrier that absorbs a set amount of damage before
                  expiring. When the barrier is destroyed it will burst and deal
                  damage equal to the amount it could absorb to an area around
                  it. Removes certain types of negative buffs and stuns on cast.
               </div>
               <div className={classAbaddonPage.brDiv}>
                  DISPEL TYPE: Strong Dispel
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilitySecondLineInfo;
