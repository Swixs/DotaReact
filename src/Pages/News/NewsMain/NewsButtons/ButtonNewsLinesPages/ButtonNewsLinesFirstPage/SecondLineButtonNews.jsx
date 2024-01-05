import classNews from './../../../../News.module.css';

const SecondLineButtonNews = () => {
   return (
      <div>
         <div className={classNews.secondLineButtonsNews}>
            <button className={classNews.fourthBtnNews}>
               <div className={classNews.timeBtnNews}>1 NOVEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  The International Grand Champions
               </div>
               <div className={classNews.textBtnNews}>
                  Congratulations to Team Spirit, Grand Champions at The
                  International 2023 and just the second team ever to claim the
                  Aegis twice.
               </div>
            </button>
            <button className={classNews.fifthBtnNews}>
               <div className={classNews.timeBtnNews}>27 OCTOBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  The International Is Here
               </div>
               <div className={classNews.textBtnNews}>
                  A truly epic Playoffs weekend has come to a close, and eight
                  teams have clawed their way to a coveted spot at the main
                  event: Team Spirit, Team Liquid, LGD Gaming and Azure Ray
                  in...
               </div>
            </button>
            <button className={classNews.SixthBtnNews}>
               <div className={classNews.timeBtnNews}>20 OCTOBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  Get Ready for Playoffs Weekend
               </div>
               <div className={classNews.textBtnNews}>
                  Twenty teams entered Group Stage weekend. And now, four
                  intense days, four eliminations, 57 godlike sprees, six
                  rampages, 104 heroes picked, and 100 total matches later,
                  eight...
               </div>
            </button>
         </div>
      </div>
   );
};

export default SecondLineButtonNews;
