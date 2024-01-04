import React, { useState } from 'react';
import NewsHeader from './NewsHeader/NewsHeader';
import NewsMain from './NewsMain/NewsMain';

const News = () => {
   const [activeCategory, setActiveCategory] = useState('news');

   const handleCategoryChange = category => {
      setActiveCategory(category);
   };

   return (
      <div>
         <NewsHeader
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
         />
         <NewsMain selectedCategory={activeCategory} />
      </div>
   );
};

export default News;
