import classAbaddonPage from '../AbaddonPage.module.css';
import { Link } from 'react-router-dom';

const FooterButtonsRight = ({ posts }) => {
   console.log(posts[0]);
   return (
      <div>
         <Link to="/heroes/Alchemist">
            <button className={classAbaddonPage.buttonRight}>
               <div className={classAbaddonPage.buttonText}>
                  <div>NEXT HERO</div>
                  <div className={classAbaddonPage.titleButton}>
                     {posts[0].rightButton[0].nameNextHero}
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
               <div className={classAbaddonPage.buttonPictureRight}>
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
