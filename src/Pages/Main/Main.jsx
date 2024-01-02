import React from 'react';
import classMain from './Main.module.css';
import Video from './topMain/Video/video';
import TopMain from './topMain/topMain';
import NewsMain from './newsMain/newsMain';
import InviteMainTop from './inviteMain/inviteMainTop';
import InviteMainBottom from './inviteMain/inviteMainBottom';

const Main = () => {
   return (
      <div className={classMain.mainContent}>
         <Video />
         <TopMain />
         <NewsMain />
         <InviteMainTop />
         <InviteMainBottom />
      </div>
   );
};

export default Main;
