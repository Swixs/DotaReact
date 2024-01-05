import classNews from './../../../../News.module.css';

const ThirdLineButtonNews = () => {
   return (
      <div>
         <div className={classNews.ThirdLineButtonsNews}>
            <button className={classNews.sevenBtnNews}>
               <div className={classNews.timeBtnNews}>12 OCTOBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  TI News: Livestreams, Viewing Parties, and The Secret Shop
               </div>
               <div className={classNews.textBtnNews}>
                  The Road to The International is literally right around the
                  metaphorical corner, and that means a lot of cool and exciting
                  stuff is revving to life.
               </div>
            </button>
            <button className={classNews.eightBtnNews}>
               <div className={classNews.timeBtnNews}>11 OCTOBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  Get Ready For Group Stage
               </div>
               <div className={classNews.textBtnNews}>
                  The Road to The International's Group Stage weekend officially
                  starts this Thursday at 10am PST. Players have been arriving
                  in Seattle all week, preparing themselves for what...
               </div>
            </button>
            <button className={classNews.nineBtnNews}>
               <div className={classNews.timeBtnNews}>10 OCTOBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  The International 2023 Talent Bundles
               </div>
               <div className={classNews.textBtnNews}>
                  This year’s talent has officially been announced. Where? In
                  the “Talent” tab of the Compendium. Are you back? Great.
               </div>
            </button>
         </div>
      </div>
   );
};

export default ThirdLineButtonNews;
