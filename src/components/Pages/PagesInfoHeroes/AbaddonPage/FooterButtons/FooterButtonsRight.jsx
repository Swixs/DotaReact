import classAbaddonPage from '../AbaddonPage.module.css';

const FooterButtonsRight = () => {
   return (
      <div>
         <button className={classAbaddonPage.buttonRight}>
            <div className={classAbaddonPage.buttonText}>
               <div>NEXT HERO</div>
               <div className={classAbaddonPage.titleButton}>ALCHEMIST</div>
               <div className={classAbaddonPage.subTitleButton}>
                  <img
                     className={classAbaddonPage.buttonTextAtr}
                     src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                     alt="Power"
                  />
                  MELEE
               </div>
            </div>
            <div className={classAbaddonPage.buttonPictureRight}>
               <img
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/alchemist.png"
                  alt="nextHero"
               />
            </div>
         </button>
      </div>
   );
};

export default FooterButtonsRight;
