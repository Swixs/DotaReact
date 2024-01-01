import classMain from './../../Main.module.css';

const ButtonTextBlock = () => {
   const BtnPlay = () => {
      window.location.href = 'https://store.steampowered.com/app/570/Dota_2/';
   };

   return (
      <div>
         <button className={classMain.btnPlay} onClick={BtnPlay}>
            {' '}
            <img
               className={classMain.iconSteam}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/steam_icon.svg"
               alt="SteamIcon"
            />{' '}
            <div className={classMain.column}>
               <div className={classMain.textButton}>Play for free </div>
               <div className={classMain.markTextButton}>
                  {' '}
                  Download on Steam{' '}
               </div>
            </div>
         </button>
      </div>
   );
};

export default ButtonTextBlock;
