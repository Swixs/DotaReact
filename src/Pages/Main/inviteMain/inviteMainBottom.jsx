import { Link } from 'react-router-dom';

import useAnimation from '../../../processes/useAnimation';

import classMain from './../Main.module.css';

const InviteMainBottom = () => {
   const isActive = useAnimation(false, 100);
   const isActiveBigTitle = useAnimation(false, 200);
   return (
      <div className={classMain.backgroundInviteMainBottom}>
         <div className={classMain.overlay}></div>
         <div
            className={`${classMain.titleInviteBottom} ${
               isActive ? classMain.active : ''
            }`}
         >
            WHO WILL YOU
         </div>
         <div
            className={`${classMain.bigTitleInviteBottom} ${
               isActiveBigTitle ? classMain.active : ''
            }`}
         >
            CHOOSE?
         </div>
         <div className={classMain.borderInviteBottom}></div>

         <div className={classMain.textInviteBottom}>
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
         </div>
         <Link to="/heroes">
            <button className={classMain.btnInviteBottom}>
               <div className={classMain.textBtnInviteBottom}>
                  VIEM ALL HEROES
               </div>
            </button>
         </Link>
      </div>
   );
};

export default InviteMainBottom;
