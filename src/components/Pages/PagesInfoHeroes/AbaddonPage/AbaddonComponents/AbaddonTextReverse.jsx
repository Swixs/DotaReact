import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddonTextReverse = () => {
   return (
      <div>
         <div className={classAbaddonPage.grayBar}></div>
         <div className={classAbaddonPage.textReverse}>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
               alt="atribute"
               width={35}
               height={35}
            />
            <div className={classAbaddonPage.txtArt}>
               Abaddon <span className={classAbaddonPage.span}>102</span>
            </div>
         </div>
      </div>
   );
};

export default AbaddonTextReverse;
