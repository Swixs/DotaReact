import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityTherdLineInfo = () => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_frostmourne.png"
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>
                  CURSE OF AVERNUS
               </div>

               <div className={classAbaddonPage.textSpellSecond}>
                  Abaddon strikes an enemy, slowing the target's movement speed.
                  If the target gets hit 4.0 times, they become affected by a
                  chilling curse causing them to be silenced and slowed, and all
                  attacks against them gain an attack speed boost.
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityTherdLineInfo;
