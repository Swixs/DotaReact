import classAbaddonPage from '../AbaddonPage.module.css';
import { Link } from 'react-router-dom';

const FooterButtonsRight = ({ posts }) => {
   const hasSecondName = posts[0].rightButton[0].secondNameNextHero;

   return (
      <div>
         <Link to={posts[0].rightButton[0].linkNextHero}>
            <button className={classAbaddonPage.buttonRight}>
               <div className={classAbaddonPage.buttonText}>
                  <div>NEXT HERO</div>
                  <div className={classAbaddonPage.titleButton}>
                     <div>{posts[0].rightButton[0].nameNextHero}</div>
                     {hasSecondName && (
                        <div className={classAbaddonPage.smallSpace}></div>
                     )}
                     {hasSecondName && (
                        <div>{posts[0].rightButton[0].secondNameNextHero}</div>
                     )}
                  </div>
                  <div className={classAbaddonPage.subTitleButton}>
                     <img
                        className={classAbaddonPage.buttonTextAtr}
                        src={posts[0].rightButton[0].atrNextHero}
                        alt="Power"
                     />
                     {posts[0].rightButton[0].typeNextHero}
                  </div>
               </div>
               <div
                  className={
                     posts[0].rightButton[0].classImgNextHero ||
                     classAbaddonPage.buttonPictureRight
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
