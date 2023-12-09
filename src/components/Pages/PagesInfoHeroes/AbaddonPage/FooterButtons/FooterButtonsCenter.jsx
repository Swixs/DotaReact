import classAbaddonPage from '../AbaddonPage.module.css';
import { Link } from 'react-router-dom';

const FooterButtonsCenter = () => {
   return (
      <div className={classAbaddonPage.btnNet}>
         <Link to="/heroes" className={classAbaddonPage.LinkStyle}>
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
               <div className={classAbaddonPage.textCenterButton}>
                  ALL HEROES
               </div>
            </button>
         </Link>
      </div>
   );
};

export default FooterButtonsCenter;
