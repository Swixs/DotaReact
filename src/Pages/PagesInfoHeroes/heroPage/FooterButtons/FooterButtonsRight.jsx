import { Link } from 'react-router-dom';

import classPage from '../../../../style/HeroPage.module.css';

const FooterButtonsRight = ({ posts }) => {
   const hasSecondName = posts[0].rightButton[0].secondNameNextHero;

   return (
      <div>
         <Link to={posts[0].rightButton[0].linkNextHero}>
            <button className={classPage.buttonRight}>
               <div className={classPage.buttonText}>
                  <div>NEXT HERO</div>
                  <div className={classPage.titleButton}>
                     <div>{posts[0].rightButton[0].nameNextHero}</div>
                     {hasSecondName && (
                        <div className={classPage.smallSpace}></div>
                     )}
                     {hasSecondName && (
                        <div>{posts[0].rightButton[0].secondNameNextHero}</div>
                     )}
                  </div>
                  <div className={classPage.subTitleButton}>
                     <img
                        className={classPage.buttonTextAtr}
                        src={posts[0].rightButton[0].atrNextHero}
                        alt="Power"
                     />
                     {posts[0].rightButton[0].typeNextHero}
                  </div>
               </div>
               <div
                  className={
                     posts[0].rightButton[0].classImgNextHero ||
                     classPage.buttonPictureRight
                  }
               >
                  <img
                     src={posts[0].rightButton[0].imgNextHero}
                     alt="nextHero"
                  />
               </div>
            </button>
         </Link>
      </div>
   );
};

export default FooterButtonsRight;
