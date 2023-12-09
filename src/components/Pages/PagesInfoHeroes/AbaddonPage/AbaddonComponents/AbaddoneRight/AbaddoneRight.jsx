import classAbaddonPage from '../../AbaddonPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import AbaddoneSkils from './AbaddoneSkills';
import { Link } from 'react-router-dom';

const AbaddonRightPage = props => {
   return (
      <div>
         <button className={classAbaddonPage.btnArrow}>
            <FontAwesomeIcon
               icon={faCaretLeft}
               className={classAbaddonPage.arrowColor}
               style={{
                  '--fa-primary-color': '#787878',
                  '--fa-secondary-color': '#787878',
               }}
            />
         </button>

         <button className={classAbaddonPage.buttonCube}>
            <Link to="/heroes" className={classAbaddonPage.LinkStyle}>
               <div className={classAbaddonPage.buttonCubeTop}>
                  <div className={classAbaddonPage.box}></div>
                  <div className={classAbaddonPage.box}></div>
                  <div className={classAbaddonPage.box}></div>
               </div>
               <div className={classAbaddonPage.buttonCubeBottom}>
                  <div className={classAbaddonPage.box}></div>
                  <div className={classAbaddonPage.box}></div>
                  <div className={classAbaddonPage.box}></div>
               </div>
            </Link>
         </button>

         <button className={classAbaddonPage.btnArrowRight}>
            <FontAwesomeIcon
               icon={faCaretRight}
               className={classAbaddonPage.arrowColor}
               style={{
                  '--fa-primary-color': '#757575',
                  '--fa-secondary-color': '#757575',
               }}
            />
         </button>

         <div className={classAbaddonPage.background}></div>

         <video className={classAbaddonPage.video} autoPlay muted loop>
            <source src={props.video[0].videoHero} type="video/webm" />
         </video>

         <div className={classAbaddonPage.AbaddoneSkils}>
            <AbaddoneSkils />
         </div>
      </div>
   );
};

export default AbaddonRightPage;
