import classPage from '../HeroPage.module.css';

const FooterLine = () => {
   return (
      <div>
         <div className={classPage.footerLine}>
            <img
               className={classPage.footerLogoValve}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
               alt="LOGODOTA"
            />
            <img
               className={classPage.footerLogoDota}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
               alt="LOGOVALVE"
            />
         </div>

         <div className={classPage.footerLogoText}>
            Dota and the Dota logo are trademarks and/or registered trademarks
            of Valve Corporation. 2023 Valve Corporation, all rights reserved.
         </div>
      </div>
   );
};

export default FooterLine;
