import FooterButtonsLeft from './FooterButtonsLeft';
import classPage from '../HeroPage.module.css';
import FooterButtonsCenter from './FooterButtonsCenter';
import FooterButtonsRight from './FooterButtonsRight';

const FooterButtons = ({ posts }) => {
   return (
      <div className={classPage.buttonHeight}>
         <div className={classPage.lineButtons}>
            <FooterButtonsLeft posts={posts} />
            <FooterButtonsCenter />
            <FooterButtonsRight posts={posts} />
         </div>
         <div className={classPage.backgroundButtons}></div>
      </div>
   );
};

export default FooterButtons;
