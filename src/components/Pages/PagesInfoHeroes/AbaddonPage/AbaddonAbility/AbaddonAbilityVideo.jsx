import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityVideo = () => {
   return (
      <div className={classAbaddonPage.videoContainerAbility}>
         <video
            className={classAbaddonPage.videoAbility}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.webm"
            autoPlay
            muted
            loop
         ></video>
      </div>
   );
};

export default AbilityVideo;
