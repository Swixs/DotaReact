import classPage from '../HeroPage.module.css';

const HeroHistory = props => {
   return (
      <div className={classPage.history}>
         {props.history[0].firstChapterHistory}
         <br />
         <br />
         {props.history[0].secondChapterHistory}
         <br />
         <br />
         {props.history[0].thirdChapterHistory}
         <br />
         <br />
      </div>
   );
};

export default HeroHistory;
