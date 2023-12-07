import classAbaddonPage from '../AbaddonPage.module.css';
import { useState } from 'react';
import AbaddonHistory from './AbaddonHistory';
import AbaddonType from './AbaddonType';

const AbaddonListSpels = props => {
   const [showFullHistory, setShowFullHistory] = useState(false);

   const toggleFullHistory = () => {
      setShowFullHistory(!showFullHistory);
   };
   const getContent = () => {
      if (showFullHistory) {
         return (
            <div className={classAbaddonPage.scrollableText}>
               <AbaddonHistory history={props.history} />
            </div>
         );
      } else {
         return (
            <div className={classAbaddonPage.text}>
               {props.history[1].summaryTextFirst}{' '}
               <span className={classAbaddonPage.spanList}>
                  {props.history[2].nameSpellFirst}
               </span>
               ,{props.history[1].summaryTextSecond}{' '}
               <span className={classAbaddonPage.spanList}>
                  {props.history[2].nameSpellSecond}{' '}
               </span>{' '}
               {props.history[1].summaryTextThird}{' '}
               <span className={classAbaddonPage.spanList}>
                  {props.history[2].nameSpellThird}{' '}
               </span>{' '}
               {props.history[1].summaryTextFourth}
            </div>
         );
      }
   };

   const getAbaddonType = () => {
      return showFullHistory ? null : <AbaddonType type={props.type} />;
   };

   return (
      <div className={classAbaddonPage.container}>
         {getContent()}

         <div>
            <button
               className={classAbaddonPage.btnText}
               onClick={toggleFullHistory}
            >
               {showFullHistory ? 'Close History' : 'Read Full History'}
            </button>
         </div>

         {getAbaddonType()}
      </div>
   );
};

export default AbaddonListSpels;
