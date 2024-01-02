import React from 'react';
import classMain from './Main.module.css';
import Video from './topMain/Video/video';
import TopMain from './topMain/topMain';
import NewsMain from './newsMain/newsMain';
import InviteMainTop from './inviteMain/inviteMainTop';

const Main = () => {
   return (
      <div className={classMain.mainContent}>
         <Video />
         <TopMain />
         <NewsMain />
         <InviteMainTop />
      </div>
   );
};

export default Main;
