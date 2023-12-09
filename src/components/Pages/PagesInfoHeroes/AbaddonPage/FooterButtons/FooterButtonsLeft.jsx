import classAbaddonPage from '../AbaddonPage.module.css';

const FooterButtonsLeft = props => {
   const leftBtn = () => {
      console.log(1);
   };
   return (
      <div>
         <button className={classAbaddonPage.buttonLeft} onClick={leftBtn}>
            <div className={classAbaddonPage.buttonTextLeft}>
               <div>PREVIOUS HERO</div>
               <div className={classAbaddonPage.titleButton}>
                  {props.leftButton[0].namePreviousHero}
               </div>
               <div className={classAbaddonPage.subTitleButton}>
                  <img
                     className={classAbaddonPage.buttonTextAtr}
                     src={props.leftButton[0].atrPreviousHero}
                     alt="hero Atr"
                  />
                  {props.leftButton[0].typePreviousHero}
               </div>
            </div>

            <div className={classAbaddonPage.buttonPictureLeft}>
               <img
                  src={props.leftButton[0].imgPreviousHero}
                  alt="previous hero"
               />
            </div>
         </button>
      </div>
   );
};

export default FooterButtonsLeft;
