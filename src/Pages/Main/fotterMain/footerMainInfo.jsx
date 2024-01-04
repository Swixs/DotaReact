import classMain from './../Main.module.css';

const FooterMainInfo = () => {
   const handleButtonClick = () => {
      // Здесь вы можете использовать программное перенаправление на другую страницу
      window.location.href = 'https://store.steampowered.com/app/570/Dota_2/';
   };
   return (
      <div className={classMain.FooterMainInfoBackground}>
         <div className={classMain.logoFooterMainInfo}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg"
               alt="logo"
            />
         </div>
         <div className={classMain.firstTitle}>THE</div>
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg"
            alt="fotoChampionate"
            className={classMain.imgChampionats}
         />
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg"
            alt="secondFoto"
            className={classMain.imgSecondChampionats}
         />
         <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_3.jpg"
            alt="thirdFoto"
            className={classMain.imgTherdChampionats}
         />
         <div className={classMain.secondTitle}>DOTA PRO CIRCUIT</div>
         <div className={classMain.borderTitle}></div>
         <div className={classMain.textTitle}>
            When not climbing the ranks, you'll be able to learn from the best.
            The Dota Pro Circuit features ultra-high-level Dota 2 competition
            streaming regularly in the game client, on Twitch and Steam.TV.
            Culminating in the largest e-sports championship in the world, The
            International, professional Dota 2 is an event not to be missed.
         </div>
         <div className={classMain.block}></div>
         <div className={classMain.blockPlay}>
            <div className={classMain.titlePlayTop}>JOIN THE</div>
            <div className={classMain.titlePlayBottom}>BATTLE</div>
            <div className={classMain.borderPlay}></div>
            <div
               className={classMain.btnFooterPlay}
               onClick={handleButtonClick}
            >
               PLAY FREE NOW
            </div>
         </div>
         <div className={classMain.backgroundFooter}>
            <div className={classMain.footerLine}>
               <img
                  className={classMain.footerLogoValve}
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
                  alt="LOGODOTA"
               />
               <img
                  className={classMain.footerLogoDota}
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
                  alt="LOGOVALVE"
               />
            </div>

            <div className={classMain.footerLogoText}>
               Dota and the Dota logo are trademarks and/or registered
               trademarks of Valve Corporation. 2023 Valve Corporation, all
               rights reserved.
            </div>
         </div>
      </div>
   );
};

export default FooterMainInfo;
