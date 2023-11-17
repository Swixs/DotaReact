import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddoneAbilityLeft = () => {
   function click() {
      console.log(1);
   }

   return (
      <div>
         <div className={classAbaddonPage.videoContainerAbility}>
            <video
               className={classAbaddonPage.videoAbility}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.webm"
               autoPlay
               muted
               loop
            ></video>
         </div>

         <div>
            <button onClick={click} className={classAbaddonPage.btn}>
               <img
                  className={classAbaddonPage.spell}
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png"
                  alt="firstSpell"
               />
            </button>
         </div>
      </div>
   );
};

export default AbaddoneAbilityLeft;
