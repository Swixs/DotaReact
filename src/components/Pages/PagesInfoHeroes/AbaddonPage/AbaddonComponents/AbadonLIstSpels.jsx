import { useState } from 'react';
import AbaddonHistory from './AbaddonHistory';
import classAbaddonPage from '../AbaddonPage.module.css';
import AbaddonType from './AbaddonType';
const AbaddonListSpels = ({ posts }) => {
   if (!posts || !posts.length) {
      return null;
   }

   const [showFullHistory, setShowFullHistory] = useState(false);

   const toggleFullHistory = () => {
      setShowFullHistory(!showFullHistory);
   };

   const getContent = () => {
      if (!posts[0].history || !posts[0].history.length) {
         return null;
      }

      if (showFullHistory) {
         return (
            <div className={classAbaddonPage.scrollableText}>
               <AbaddonHistory history={posts[0].history} />
            </div>
         );
      } else {
         return (
            <div className={classAbaddonPage.text}>
               {posts[0].history[1].summaryTextFirst}{' '}
               <span className={classAbaddonPage.spanList}>
                  {posts[0].history[2].nameSpellFirst}
               </span>
               ,{posts[0].history[1].summaryTextSecond}{' '}
               <span className={classAbaddonPage.spanList}>
                  {posts[0].history[2].nameSpellSecond}{' '}
               </span>{' '}
               {posts[0].history[1].summaryTextThird}{' '}
               <span className={classAbaddonPage.spanList}>
                  {posts[0].history[2].nameSpellThird}{' '}
               </span>{' '}
               {posts[0].history[1].summaryTextFourth}
            </div>
         );
      }
   };

   const getAbaddonType = () => {
      return showFullHistory ? null : (
         <AbaddonType type={posts[0].type} history={posts[0].history} />
      );
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
