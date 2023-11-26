import classAbaddonPage from '../../AbaddonPage.module.css';

const AbilityLineInfo = () => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <img
               className={classAbaddonPage.pictureSpell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png"
               alt="firstSpell"
            />

            <div className={classAbaddonPage.displayColumn}>
               <div className={classAbaddonPage.nameSpell}>MIST COIL</div>

               <div className={classAbaddonPage.textSpell}>
                  Abaddon releases a coil of deathly mist that can damage an
                  enemy unit or heal a friendly unit at the cost of some of
                  Abaddon's health.
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbilityLineInfo;
