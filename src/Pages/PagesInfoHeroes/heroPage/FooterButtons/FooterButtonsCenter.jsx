import { Link } from 'react-router-dom';

import classPage from '../../../../style/HeroPage.module.css';

const FooterButtonsCenter = () => {
   return (
      <div className={classPage.btnNet}>
         <Link to="/heroes" className={classPage.LinkStyle}>
            <button className={classPage.buttonCenter}>
               <div className={classPage.lineDisplay}>
                  <div className={classPage.btnCenterCube}></div>
                  <div className={classPage.btnCenterCube}></div>
                  <div className={classPage.btnCenterCube}></div>
               </div>
               <div className={classPage.lineDisplay}>
                  <div className={classPage.btnCenterCube}></div>
                  <div className={classPage.btnCenterCube}></div>
                  <div className={classPage.btnCenterCube}></div>
               </div>
               <div className={classPage.textCenterButton}>ALL HEROES</div>
            </button>
         </Link>
      </div>
   );
};

export default FooterButtonsCenter;
