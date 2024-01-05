import React from 'react';
import classNews from './../News.module.css';
import ButtonNews from './NewsButtons/ButtonNews';

const NewsMain = ({ selectedCategory }) => {
   return (
      <div className={classNews.backgroundNewsMain}>
         {selectedCategory === 'news' && (
            <div>
               <ButtonNews />
            </div>
         )}
         {selectedCategory === 'updates' && <div>Контент обновлений</div>}
      </div>
   );
};

export default NewsMain;
