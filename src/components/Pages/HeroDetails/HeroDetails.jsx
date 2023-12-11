import React from 'react';
import { useLocation } from 'react-router-dom';

import TextReverse from '../PagesInfoHeroes/AbaddonPage/AbaddonComponents/TextReverse';
import Text from '../PagesInfoHeroes/AbaddonPage/AbaddonComponents/Text';

import classAbaddonPage from './../PagesInfoHeroes/AbaddonPage/AbaddonPage.module.css';

const HeroDetails = props => {
   const location = useLocation();

   let posts;

   if (location.pathname.includes('Alchemist')) {
      posts = props.state.AlchemistPage && props.state.AlchemistPage[0]?.posts;
   }
   if (location.pathname.includes('Ancientapparition')) {
      posts =
         props.state.AncientapparitionPage &&
         props.state.AncientapparitionPage[0]?.posts;
   }
   if (location.pathname.includes('Abaddon')) {
      posts = props.state.AbaddonePage && props.state.AbaddonePage[0]?.posts;
   }
   if (location.pathname.includes('Anti-mage')) {
      posts = props.state.AntiMagePage && props.state.AntiMagePage[0]?.posts;
   }
   if (location.pathname.includes('Arcwarden')) {
      posts = props.state.ArcWardenPage && props.state.ArcWardenPage[0]?.posts;
   }

   return (
      <div className={classAbaddonPage.page}>
         <div className={classAbaddonPage.pageContent}>
            <div className={classAbaddonPage.textWrapper}>
               {posts && <TextReverse posts={posts} />}
               <div className={classAbaddonPage.pageFlex}>
                  {posts && <Text posts={posts} />}
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroDetails;
