import { Link } from 'react-router-dom';
import classAbaddonPage from '../AbaddonPage.module.css';

const FooterButtonsLeft = ({ posts }) => {
   const hasSecondName = posts[0].leftButton[0].secondNamePreviousHero;

   return (
      <div>
         <Link to={posts[0].leftButton[0].linkPreviousHero}>
            <button className={classAbaddonPage.buttonLeft}>
               <div className={classAbaddonPage.buttonTextLeft}>
                  <div>PREVIOUS HERO</div>
                  <div className={classAbaddonPage.titleButton}>
                     <div>{posts[0].leftButton[0].namePreviousHero}</div>
                     {hasSecondName && (
                        <div className={classAbaddonPage.smallSpace}></div>
                     )}
                     {hasSecondName && (
                        <div>
                           {posts[0].leftButton[0].secondNamePreviousHero}
                        </div>
                     )}
                  </div>
                  <div className={classAbaddonPage.subTitleButton}>
                     <img
                        className={classAbaddonPage.buttonTextAtr}
                        src={posts[0].leftButton[0].atrPreviousHero}
                        alt="hero Atr"
                     />
                     {posts[0].leftButton[0].typePreviousHero}
                  </div>
               </div>

               <div
                  className={
                     posts[0].leftButton[0].classImgPreviousHero ||
                     classAbaddonPage.buttonPictureLeft
                  }
               >
                  <img
                     src={posts[0].leftButton[0].imgPreviousHero}
                     alt="previous hero"
                  />
               </div>
            </button>
         </Link>
      </div>
   );
};

export default FooterButtonsLeft;
