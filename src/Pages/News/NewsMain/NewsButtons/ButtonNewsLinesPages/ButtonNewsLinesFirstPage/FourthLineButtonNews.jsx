import classNews from './../../../../News.module.css';

const FourthLineButtonNews = () => {
   return (
      <div>
         <div className={classNews.fourthLineButtonsNews}>
            <button className={classNews.tenBtnNews}>
               <div className={classNews.timeBtnNews}>27 SEPTEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  The International 2023 Celebration Update
               </div>
               <div className={classNews.textBtnNews}>
                  We're excited to release the International Compendium for The
                  International 2023. Because this is a new shape to previous
                  years’ Compendiums, we wanted to walk you through what it...
               </div>
            </button>
            <button className={classNews.elevenBtnNews}>
               <div className={classNews.timeBtnNews}>23 SEPTEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  Community Events at The International
               </div>
               <div className={classNews.textBtnNews}>
                  Invitations have been sent, plane tickets have been reserved,
                  and our old friends the soundproof booths are undergoing their
                  final maintenance and inspections: In just a few short...
               </div>
            </button>
            <button className={classNews.twelveBtnNews}>
               <div className={classNews.timeBtnNews}>23 SEPTEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  Dota 2 Workshop Fall Call-to-Arms
               </div>
               <div className={classNews.textBtnNews}>
                  Between emoji-encoded patch notes, our 10-Year Anniversary
                  celebration, and massive updates to Dota's Armory and behavior
                  system — and of course The International rapidly...
               </div>
            </button>
         </div>
      </div>
   );
};

export default FourthLineButtonNews;
