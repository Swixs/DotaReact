import classAbaddonPage from '../AbaddonPage.module.css';

const FooterButtonsLeft = () => {
   return (
      <div>
         <button className={classAbaddonPage.buttonLeft}>
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
