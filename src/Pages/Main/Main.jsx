import React from 'react';
import classMain from './Main.module.css';
import Video from './topMain/Video/video';
import TopMain from './topMain/topMain';
import NewsMain from './newsMain/newsMain';

const Main = () => {
   return (
      <div className={classMain.mainContent}>
         <Video />
         <TopMain />
         <NewsMain />
      </div>
   );
};

export default Main;
