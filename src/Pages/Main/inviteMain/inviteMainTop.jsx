import classMain from './../Main.module.css';
import useAnimation from '../../../processes/useAnimation';

const InviteMainTop = () => {
   const isActive = useAnimation(false, 100);
   const isActiveBigTitle = useAnimation(false, 200);

   return (
      <div className={classMain.backgroundInviteMainTop}>
         <div className={classMain.overlay}></div>
         <div
            className={`${classMain.titleInvite} ${
               isActive ? classMain.active : ''
            }`}
         >
            JOIN THE
         </div>
         <div
            className={`${classMain.bigTitleInvite} ${
               isActiveBigTitle ? classMain.active : ''
            }`}
         >
            BATTLE OF THE ANCIENTS
         </div>
         <div className={classMain.borderInvite}></div>
         <div className={classMain.textInvite}>
            Every day, millions of players worldwide enter the battle as one of
            over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
            multi-player action RTS game ever made and there's always a new
            strategy or tactic to discover. It's completely free to play and
            always will be – start defending your ancient now.
         </div>
         <div className={classMain.gapInvite}></div>
      </div>
   );
};

export default InviteMainTop;
