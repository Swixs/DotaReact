import React from 'react';
import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityVideo = ({ selectedAbility, videoSpells }) => {
   const videoUrls = videoSpells
      ? {
           ability1: videoSpells[0].videoSpellFirst,
           ability2: videoSpells[0].videoSpellSecond,
           ability3: videoSpells[0].videoSpellThird,
           ability4: videoSpells[0].videoSpellFoutrh,
        }
      : {};

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
