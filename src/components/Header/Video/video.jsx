import React from "react";
import ClassVideo from './video.module.css';

const Video = () => {
    return (
        <div className={ClassVideo.videoContainer}>
            <video autoPlay muted loop className={ClassVideo.video}>
                <source src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
                    type="video/webm" width="640" height="160" />
            </video>
            <div className={ClassVideo.overlay}></div>
            <div className={ClassVideo.bottomOverlay}></div>
            <div className={ClassVideo.sideOverlay}></div>
        </div>
    );
}

export default Video;
