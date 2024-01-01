import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import HeroSkils from './HeroSkills';
import { Link } from 'react-router-dom';

import classPage from '../../HeroPage.module.css';

const HeroRightPage = ({ posts }) => {
   return (
      <div>
         <Link to={posts[0].btnArrow[0].linkLeftArrowBtn}>
            <button
               className={
                  posts[0].btnArrow && posts[0].btnArrow[0].leftArrowBtn
                     ? posts[0].btnArrow[0].leftArrowBtn
                     : classPage.btnArrow
               }
            >
               <FontAwesomeIcon
                  icon={faCaretLeft}
                  className={classPage.arrowColor}
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
                  : classPage.buttonCube
            }
         >
            <Link to="/heroes" className={classPage.LinkStyle}>
               <div className={classPage.buttonCubeTop}>
                  <div className={classPage.box}></div>
                  <div className={classPage.box}></div>
                  <div className={classPage.box}></div>
               </div>
               <div className={classPage.buttonCubeBottom}>
                  <div className={classPage.box}></div>
                  <div className={classPage.box}></div>
                  <div className={classPage.box}></div>
               </div>
            </Link>
         </button>

         <Link to={posts[0].btnArrow[0].linkRightArrowBtn}>
            <button
               className={
                  posts[0].btnArrow && posts[0].btnArrow[0].rightArrowBtn
                     ? posts[0].btnArrow[0].rightArrowBtn
                     : classPage.btnArrowRight
               }
            >
               <FontAwesomeIcon
                  icon={faCaretRight}
                  className={classPage.arrowColor}
                  style={{
                     '--fa-primary-color': '#757575',
                     '--fa-secondary-color': '#757575',
                  }}
               />
            </button>
         </Link>

         <div className={classPage.background}></div>

         <video className={classPage.video} autoPlay muted loop>
            <source src={posts[0].video[0].videoHero} type="video/webm" />
         </video>

         <div className={classPage.AbaddoneSkils}>
            <HeroSkils />
         </div>
      </div>
   );
};

export default HeroRightPage;
