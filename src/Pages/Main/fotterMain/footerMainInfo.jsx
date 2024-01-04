import classMain from './../Main.module.css';

const FooterMainInfo = () => {
   return (
      <div className={classMain.FooterMainInfoBackground}>
         <div className={classMain.logoFooterMainInfo}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg"
               alt="logo"
            />
         </div>
         <div className={classMain.firstTitle}>THE</div>
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
            <div className={classMain.btnFooterPlay}>PLAY FREE NOW</div>
         </div>
      </div>
   );
};

export default FooterMainInfo;
