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
               <TextReverse posts={props.state.posts} />
               <div className={classAbaddonPage.pageFlex}>
                  <AbaddonText
                     type={props.state.type}
                     posts={props.state.posts}
                     history={props.state.history}
                  />
                  <AbaddonRightPage video={props.state.video} />
               </div>
               <div className={classAbaddonPage.statsLine}>
                  <AbaddoneStatsLine stats={props.state.stats} />
               </div>

               <div>
                  <AbaddoneAbility
                     videoSpells={props.state.videoSpells}
                     spellsImg={props.state.spellsImg}
                     firstSpellsDetails={props.state.firstSpellsDetails}
                     secondSpellsDetails={props.state.secondSpellsDetails}
                     thirdSpellsDetails={props.state.thirdSpellsDetails}
                     fourthSpellsDetails={props.state.fourthSpellsDetails}
                  />
               </div>

               <div className={classAbaddonPage.footerButtons}>
                  <FooterButtons
                     leftButton={props.state.leftButton}
                     rightButton={props.state.rightButton}
                  />
                  <FooterLine />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AbaddonPage;
