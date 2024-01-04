import React from 'react';
import { useLocation } from 'react-router-dom';

import TextReverse from '../../Pages/PagesInfoHeroes/heroPage/HeroComponents/TextReverse';
import Text from '../../Pages/PagesInfoHeroes/heroPage/HeroComponents/Text';
import HeroRightPage from '../../Pages/PagesInfoHeroes/heroPage/HeroComponents/HeroRight/HeroRight';
import HeroStatsLine from '../../Pages/PagesInfoHeroes/heroPage/HeroStatsLine/HeroStatsLine';
import FooterButtons from '../../Pages/PagesInfoHeroes/heroPage/FooterButtons/FooterButtons';
import HeroAbility from '../../Pages/PagesInfoHeroes/heroPage/HeroAbility/HeroAbility';
import Footer from './../../components/Footer/FooterLine';

import classPage from '../../style/HeroPage.module.css';

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
      <div className={classPage.page}>
         <div className={classPage.pageContent}>
            <div className={classPage.textWrapper}>
               {posts && <TextReverse posts={posts} />}
               <div className={classPage.pageFlex}>
                  {posts && <Text posts={posts} />}
                  <HeroRightPage
                     key={posts[0].video[0].videoHero}
                     posts={posts}
                  />
               </div>
               <div className={classPage.statsLine}>
                  <HeroStatsLine posts={posts} />
               </div>
               <div>
                  <HeroAbility posts={posts} />
               </div>
               <div className={classPage.footerButtons}>
                  <FooterButtons posts={posts} />
               </div>
               <div>
                  <Footer />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroDetails;
