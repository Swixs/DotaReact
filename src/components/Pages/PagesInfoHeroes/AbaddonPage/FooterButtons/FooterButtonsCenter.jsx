import classAbaddonPage from '../AbaddonPage.module.css';

const FooterButtonsCenter = () => {
   return (
      <div className={classAbaddonPage.btnNet}>
         <button className={classAbaddonPage.buttonCenter}>
            <div className={classAbaddonPage.lineDisplay}>
               <div className={classAbaddonPage.btnCenterCube}></div>
               <div className={classAbaddonPage.btnCenterCube}></div>
               <div className={classAbaddonPage.btnCenterCube}></div>
            </div>
            <div className={classAbaddonPage.lineDisplay}>
               <div className={classAbaddonPage.btnCenterCube}></div>
               <div className={classAbaddonPage.btnCenterCube}></div>
               <div className={classAbaddonPage.btnCenterCube}></div>
            </div>
            <div className={classAbaddonPage.textCenterButton}>ALL HEROES</div>
         </button>
      </div>
   );
};

export default FooterButtonsCenter;
