import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityFourthLineInfo = () => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_borrowed_time.png"
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>BORROWED TIME</div>

               <div className={classAbaddonPage.textSpellSecond}>
                  When activated, all damage dealt to you will heal instead of
                  harm. Most negative buffs will also be removed. If the ability
                  is not on cooldown, it will automatically activate if your
                  health falls below 400.0.
               </div>

               <div className={classAbaddonPage.brDiv}>
                  DISPEL TYPE: Strong Dispel
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityFourthLineInfo;
