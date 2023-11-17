import classLine from './HeaderLine.module.css';

const ButtonPlay = () => {
   const BtnPlay = () => {
      window.location.href = 'https://store.steampowered.com/app/570/Dota_2/';
   };

   return (
      <div>
         <button className={classLine.btnPlay} onClick={BtnPlay}>
            {' '}
            <img
               className={classLine.iconSteam}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/steam_icon.svg"
               alt="SteamIcon"
            />{' '}
            Play for free{' '}
         </button>
      </div>
   );
};

export default ButtonPlay;
