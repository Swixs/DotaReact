import { useState } from 'react';
import HeroHistory from './HeroHistory';
import classPage from '../../../../style/HeroPage.module.css';
import HeroType from './HeroType';
const HeroListSpels = ({ posts }) => {
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
            <div className={classPage.scrollableText}>
               <HeroHistory history={posts[0].history} />
            </div>
         );
      } else {
         return (
            <div className={classPage.text}>
               {posts[0].history[1].summaryTextFirst}{' '}
               <span className={classPage.spanList}>
                  {posts[0].history[2].nameSpellFirst}
               </span>
               ,{posts[0].history[1].summaryTextSecond}{' '}
               <span className={classPage.spanList}>
                  {posts[0].history[2].nameSpellSecond}{' '}
               </span>{' '}
               {posts[0].history[1].summaryTextThird}{' '}
               <span className={classPage.spanList}>
                  {posts[0].history[2].nameSpellThird}{' '}
               </span>{' '}
               {posts[0].history[1].summaryTextFourth}
            </div>
         );
      }
   };

   const getHeroType = () => {
      return showFullHistory ? null : (
         <HeroType type={posts[0].type} history={posts[0].history} />
      );
   };

   return (
      <div className={classPage.container}>
         {getContent()}

         <div>
            <button className={classPage.btnText} onClick={toggleFullHistory}>
               {showFullHistory ? 'Close History' : 'Read Full History'}
            </button>
         </div>

         {getHeroType()}
      </div>
   );
};

export default HeroListSpels;
