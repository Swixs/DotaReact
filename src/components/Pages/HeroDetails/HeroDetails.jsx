import React from 'react';
import { useLocation } from 'react-router-dom';
import classAbaddonPage from './../PagesInfoHeroes/AbaddonPage/AbaddonPage.module.css';
import TextReverse from '../PagesInfoHeroes/AbaddonPage/AbaddonComponents/TextReverse';

const HeroDetails = props => {
   console.log(props.state.AlchemistPage);
   const heroData = props.state.AbadonePage && props.state.AbadonePage[0];
   const location = useLocation();

   let posts;

   if (location.pathname.includes('Alchemist')) {
      posts = props.state.AlchemistPage && props.state.AlchemistPage[0]?.posts;
   } else {
      posts = heroData && heroData.posts;
   }

   return (
      <div className={classAbaddonPage.page}>
         <div className={classAbaddonPage.pageContent}>
            <div className={classAbaddonPage.textWrapper}>
               {posts && <TextReverse posts={posts} />}
            </div>
         </div>
      </div>
   );
};

export default HeroDetails;
