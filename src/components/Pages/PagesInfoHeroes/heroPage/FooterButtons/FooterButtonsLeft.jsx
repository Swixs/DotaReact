import { Link } from 'react-router-dom';
import classPage from '../../../../style/HeroPage.module.css';

const FooterButtonsLeft = ({ posts }) => {
   const hasSecondName = posts[0].leftButton[0].secondNamePreviousHero;

   return (
      <div>
         <Link to={posts[0].leftButton[0].linkPreviousHero}>
            <button className={classPage.buttonLeft}>
               <div className={classPage.buttonTextLeft}>
                  <div>PREVIOUS HERO</div>
                  <div className={classPage.titleButton}>
                     <div>{posts[0].leftButton[0].namePreviousHero}</div>
                     {hasSecondName && (
                        <div className={classPage.smallSpace}></div>
                     )}
                     {hasSecondName && (
                        <div>
                           {posts[0].leftButton[0].secondNamePreviousHero}
                        </div>
                     )}
                  </div>
                  <div className={classPage.subTitleButton}>
                     <img
                        className={classPage.buttonTextAtr}
                        src={posts[0].leftButton[0].atrPreviousHero}
                        alt="hero Atr"
                     />
                     {posts[0].leftButton[0].typePreviousHero}
                  </div>
               </div>

               <div
                  className={
                     posts[0].leftButton[0].classImgPreviousHero ||
                     classPage.buttonPictureLeft
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
