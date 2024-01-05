import classNews from './../../../../News.module.css';

const FirstLineButtonNews = () => {
   return (
      <div>
         <div>
            <button className={classNews.firstBtnNews}>
               <div className={classNews.timeBtnNews}>15 DECEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  The Frostivus 2023 Update is Here
               </div>
               <div className={classNews.textBtnNews}>
                  Another Frostivus is upon us, and that means King Kringle has
                  awakened from his hibernation under the wine-dark Blood Seas
                  surrounding Frostivus Castle; sent his legions of...
               </div>
            </button>
            <button className={classNews.secondBtnNews}>
               <div className={classNews.timeBtnNews}>14 DECEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  The Dark Night Before Frostivus
               </div>
               <div className={classNews.textBtnNews}>
                  'Twas Frostivus Eve, and all 'cross the map, The neutrals were
                  quiet, their camps left unstacked. We'd gorged on a feast of
                  bluehorn and spiced creep, And had just settled in for...
               </div>
            </button>
            <button className={classNews.thirdBtnNews}>
               <div className={classNews.timeBtnNews}>21 NOVEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  Gameplay Update 7.34e and What’s Up Next
               </div>
               <div className={classNews.textBtnNews}>
                  After nearly a year of coordination and production, the
                  multi-week, arena-sized monster that is The International 2023
                  has come to an exciting close.
               </div>
            </button>
         </div>
      </div>
   );
};

export default FirstLineButtonNews;
