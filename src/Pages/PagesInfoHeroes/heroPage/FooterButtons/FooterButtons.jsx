import FooterButtonsLeft from './FooterButtonsLeft';
import FooterButtonsCenter from './FooterButtonsCenter';
import FooterButtonsRight from './FooterButtonsRight';

import classPage from '../../../../style/HeroPage.module.css';

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
