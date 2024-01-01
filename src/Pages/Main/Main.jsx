import React from 'react';
import classMain from './Main.module.css';
import Video from './topMain/Video/video';
import TopMain from './topMain/topMain';

const Main = () => {
   return (
      <div className={classMain.mainContent}>
         <Video />
         <TopMain />
      </div>
   );
};

export default Main;
