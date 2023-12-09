import classAbaddonPage from '../AbaddonPage.module.css';

const FooterButtonsRight = props => {
   return (
      <div>
         <button className={classAbaddonPage.buttonRight}>
            <div className={classAbaddonPage.buttonText}>
               <div>NEXT HERO</div>
               <div className={classAbaddonPage.titleButton}>
                  {props.rightButton[0].nameNextHero}
               </div>
               <div className={classAbaddonPage.subTitleButton}>
                  <img
                     className={classAbaddonPage.buttonTextAtr}
                     src={props.rightButton[0].atrNextHero}
                     alt="Power"
                  />
                  {props.rightButton[0].typeNextHero}
               </div>
            </div>
            <div className={classAbaddonPage.buttonPictureRight}>
               <img src={props.rightButton[0].imgNextHero} alt="nextHero" />
            </div>
         </button>
      </div>
   );
};

export default FooterButtonsRight;
