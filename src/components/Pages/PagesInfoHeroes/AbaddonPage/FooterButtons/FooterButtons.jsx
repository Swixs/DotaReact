import FooterButtonsLeft from './FooterButtonsLeft';
import classAbaddonPage from '../AbaddonPage.module.css';
import FooterButtonsCenter from './FooterButtonsCenter';
import FooterButtonsRight from './FooterButtonsRight';

const FooterButtons = props => {
   return (
      <div className={classAbaddonPage.buttonHeight}>
         <div className={classAbaddonPage.lineButtons}>
            <FooterButtonsLeft leftButton={props.leftButton} />
            <FooterButtonsCenter />
            <FooterButtonsRight rightButton={props.rightButton} />
         </div>
         <div className={classAbaddonPage.backgroundButtons}></div>
      </div>
   );
};

export default FooterButtons;
