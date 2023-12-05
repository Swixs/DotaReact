import classAbaddonPage from '../AbaddonPage.module.css';

const FooterLine = () => {
   return (
      <div>
         <div className={classAbaddonPage.footerLine}>
            <img
               className={classAbaddonPage.footerLogoValve}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
               alt="LOGODOTA"
            />
            <img
               className={classAbaddonPage.footerLogoDota}
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
               alt="LOGOVALVE"
            />
         </div>

         <div className={classAbaddonPage.footerLogoText}>
            Dota and the Dota logo are trademarks and/or registered trademarks
            of Valve Corporation. 2023 Valve Corporation, all rights reserved.
         </div>
      </div>
   );
};

export default FooterLine;
