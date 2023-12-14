import FooterButtonsLeft from './FooterButtonsLeft';
import classAbaddonPage from '../AbaddonPage.module.css';
import FooterButtonsCenter from './FooterButtonsCenter';
import FooterButtonsRight from './FooterButtonsRight';

const FooterButtons = ({ posts }) => {
   return (
      <div className={classAbaddonPage.buttonHeight}>
         <div className={classAbaddonPage.lineButtons}>
            <FooterButtonsLeft posts={posts} />
            <FooterButtonsCenter />
            <FooterButtonsRight posts={posts} />
         </div>
         <div className={classAbaddonPage.backgroundButtons}></div>
      </div>
   );
};

export default FooterButtons;
