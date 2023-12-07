import React from 'react';
import HeaderLine from '../../../Header/HeaderLine';
import classAbaddonPage from './AbaddonPage.module.css';
import AbaddonText from './AbaddonComponents/AbaddonText';
import TextReverse from './AbaddonComponents/TextReverse';
import AbaddonRightPage from './AbaddonComponents/AbaddoneRight/AbaddoneRight';
import AbaddoneStatsLine from './AbaddonStatsLine/AbaddonStatsLine';
import AbaddoneAbility from './AbaddonAbility/AbaddonAbility';
import FooterButtons from './FooterButtons/FooterButtons';
import FooterLine from './FooterButtons/FooterLine';

const AbaddonPage = props => {
   return (
      <div className={classAbaddonPage.page}>
         <HeaderLine />
         <div className={classAbaddonPage.pageContent}>
            <div className={classAbaddonPage.textWrapper}>
               <TextReverse posts={props.posts} />
               <div className={classAbaddonPage.pageFlex}>
                  <AbaddonText posts={props.posts} />
                  <AbaddonRightPage />
               </div>
               <div className={classAbaddonPage.statsLine}>
                  <AbaddoneStatsLine />
               </div>

               <div>
                  <AbaddoneAbility />
               </div>

               <div className={classAbaddonPage.footerButtons}>
                  <FooterButtons />
                  <FooterLine />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbaddonPage;
