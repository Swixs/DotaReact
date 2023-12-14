import classAbaddonPage from '../../AbaddonPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import AbaddoneSkils from './AbaddoneSkills';
import { Link } from 'react-router-dom';

const AbaddonRightPage = ({ posts }) => {
   return (
      <div>
         <Link to={posts[0].btnArrow[0].linkLeftArrowBtn}>
            <button
               className={
                  posts[0].btnArrow && posts[0].btnArrow[0].leftArrowBtn
                     ? posts[0].btnArrow[0].leftArrowBtn
                     : classAbaddonPage.btnArrow
               }
            >
               <FontAwesomeIcon
                  icon={faCaretLeft}
                  className={classAbaddonPage.arrowColor}
                  style={{
                     '--fa-primary-color': '#787878',
                     '--fa-secondary-color': '#787878',
                  }}
               />
            </button>
         </Link>

         <button
            className={
               posts[0].btnArrow && posts[0].btnArrow[0].centerBtn
                  ? posts[0].btnArrow[0].centerBtn
                  : classAbaddonPage.buttonCube
            }
         >
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

         <Link to={posts[0].btnArrow[0].linkRightArrowBtn}>
            <button
               className={
                  posts[0].btnArrow && posts[0].btnArrow[0].rightArrowBtn
                     ? posts[0].btnArrow[0].rightArrowBtn
                     : classAbaddonPage.btnArrowRight
               }
            >
               <FontAwesomeIcon
                  icon={faCaretRight}
                  className={classAbaddonPage.arrowColor}
                  style={{
                     '--fa-primary-color': '#757575',
                     '--fa-secondary-color': '#757575',
                  }}
               />
            </button>
         </Link>

         <div className={classAbaddonPage.background}></div>

         <video className={classAbaddonPage.video} autoPlay muted loop>
            <source src={posts[0].video[0].videoHero} type="video/webm" />
         </video>

         <div className={classAbaddonPage.AbaddoneSkils}>
            <AbaddoneSkils />
         </div>
      </div>
   );
};

export default AbaddonRightPage;
