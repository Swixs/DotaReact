import React from 'react';
import classAbaddonPage from '../AbaddonPage.module.css';

const AbilityVideo = ({ selectedAbility, posts }) => {
   const videoUrl =
      selectedAbility === 'ability1'
         ? posts[0].videoSpells[0].videoSpellFirst
         : selectedAbility === 'ability2'
           ? posts[0].videoSpells[0].videoSpellSecond
           : selectedAbility === 'ability3'
             ? posts[0].videoSpells[0].videoSpellThird
             : selectedAbility === 'ability4'
               ? posts[0].videoSpells[0].videoSpellFoutrh
               : '';

   return (
      <div className={classAbaddonPage.videoContainerAbility}>
         <video
            className={classAbaddonPage.videoAbility}
            src={videoUrl}
            autoPlay
            muted
            loop
         ></video>
      </div>
   );
};

export default AbilityVideo;
