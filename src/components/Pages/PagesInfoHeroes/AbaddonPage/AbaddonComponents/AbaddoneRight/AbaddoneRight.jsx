import classAbaddonPage from '../../AbaddonPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import AbaddoneSkils from './AbaddoneSkills';

const AbaddonRightPage = () => {
   function btn() {
      console.log(1);
   }

   return (
      <div>
         <button className={classAbaddonPage.btnArrow} onClick={btn}>
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
         </button>

         <button className={classAbaddonPage.btnArrowRight} onClick={btn}>
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
            <source
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm"
               type="video/webm"
            />
         </video>

         <div className={classAbaddonPage.AbaddoneSkils}>
            <AbaddoneSkils />
         </div>
      </div>
   );
};

export default AbaddonRightPage;
