import React from 'react';
import classNews from './../News.module.css';

const NewsHeader = ({ activeCategory, onCategoryChange }) => {
   return (
      <div className={classNews.headerNews}>
         <div className={classNews.headerNewsInfo}>
            <div className={classNews.dataNews}>15 DECEMBER 2023 Y.</div>
            <div className={classNews.title}>
               The Frostivus 2023 Update is Here
            </div>
            <div className={classNews.mark}>Featured Post</div>
            <button className={classNews.btnNewsHeader}>READ MORE 🡢</button>
         </div>
         <button
            className={`${classNews.btnNews} ${
               activeCategory === 'news' ? classNews.active : ''
            }`}
            onClick={() => onCategoryChange('news')}
         >
            NEWS
         </button>
         <button
            className={`${classNews.btnUpdates} ${
               activeCategory === 'updates' ? classNews.active : ''
            }`}
            onClick={() => onCategoryChange('updates')}
         >
            UPDATES
         </button>
      </div>
   );
};

export default NewsHeader;
