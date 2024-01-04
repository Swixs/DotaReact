import React from 'react';
import classNews from './../News.module.css';

const NewsMain = ({ selectedCategory }) => {
   return (
      <div className={classNews.backgroundNewsMain}>
         {selectedCategory === 'news' && <div>Контент новостей</div>}
         {selectedCategory === 'updates' && <div>Контент обновлений</div>}
      </div>
   );
};

export default NewsMain;
