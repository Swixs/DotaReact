import classNews from './../../../../News.module.css';

const FifthLineButtonNews = () => {
   return (
      <div>
         <div className={classNews.fifthLineButtonsNews}>
            <button className={classNews.thirdteenBtnNews}>
               <div className={classNews.timeBtnNews}>14 SEPTEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  The Dota Pro Circuit
               </div>
               <div className={classNews.textBtnNews}>
                  We started the Dota Pro Circuit in 2017 to answer a question
                  that was coming up more and more frequently: How do you earn
                  an invite to The International?
               </div>
            </button>
            <button className={classNews.fourteenBtnNews}>
               <div className={classNews.timeBtnNews}>12 SEPTEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  Between the Lanes: The Sound (Proof Booths) of Silence
               </div>
               <div className={classNews.textBtnNews}>
                  Welcome back to Between the Lanes, a blog feature where we let
                  members of our development team walk through some of the
                  challenges, bugfixes, and occasional happy accidents we...
               </div>
            </button>
            <button className={classNews.fifteenBtnNews}>
               <div className={classNews.timeBtnNews}>7 SEPTEMBER 2023 Y.</div>
               <div className={classNews.titleBtnNews}>
                  10th Anniversary Event Extended
               </div>
               <div className={classNews.textBtnNews}>
                  We know what you’re thinking: You’ve only got three treasures
                  remaining to get all the 10th Anniversary Rewards… except
                  you’ve been at three treasures remaining for days now.
               </div>
            </button>
         </div>
      </div>
   );
};

export default FifthLineButtonNews;
