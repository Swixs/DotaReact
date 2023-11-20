import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityButtons = () => {
   function btn() {
      console.log(1);
   }

   return (
      <div>
         <button onClick={btn} className={classAbaddonPage.btn}>
            <img
               className={classAbaddonPage.spell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png"
               alt="firstSpell"
            />
         </button>
         <button onClick={btn} className={classAbaddonPage.btn}>
            <img
               className={classAbaddonPage.spell}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png"
               alt="firstSpell"
            />
         </button>
      </div>
   );
};

export default AbilityButtons;
