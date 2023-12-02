import React from 'react';
import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityVideo = ({ selectedAbility }) => {
   const videoUrls = {
      ability1:
         'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.webm',
      ability2:
         'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.mp4',
      ability3:
         'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.mp4',
   };

   return (
      <div className={classAbaddonPage.videoContainerAbility}>
         <video
            className={classAbaddonPage.videoAbility}
            src={videoUrls[selectedAbility]}
            autoPlay
            muted
            loop
         ></video>
      </div>
   );
};

export default AbilityVideo;
