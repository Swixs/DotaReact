import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddonHistory = props => {
   return (
      <div className={classAbaddonPage.history}>
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

export default AbaddonHistory;
