import classAbaddonPage from '../AbaddonPage.module.css';

const FooterButtonsLeft = () => {
   return (
      <div>
         <button className={classAbaddonPage.buttonLeft}>
            <div className={classAbaddonPage.buttonTextLeft}>
               <div>PREVIOUS HERO</div>
               <div className={classAbaddonPage.titleButton}>ZEUS</div>
               <div className={classAbaddonPage.subTitleButton}>
                  <img
                     className={classAbaddonPage.buttonTextAtr}
                     src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                     alt="hero Atr"
                  />
                  RANGED
               </div>
            </div>

            <div className={classAbaddonPage.buttonPictureLeft}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/zuus.png"
                  alt="previous hero"
               />
            </div>
         </button>
      </div>
   );
};

export default FooterButtonsLeft;
