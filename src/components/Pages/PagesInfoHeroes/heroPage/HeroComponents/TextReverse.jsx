import React from 'react';
import classPage from '../HeroPage.module.css';

const TextReverse = ({ posts }) => {
   if (!posts) {
      return null;
   }

   return (
      <div>
         <div className={classPage.grayBar}></div>
         {posts.map(post => (
            <div key={post.id} className={classPage.textReverse}>
               <img
                  src={post.imageUrl}
                  alt="attribute"
                  width={35}
                  height={35}
               />
               <div className={classPage.txtArt}>
                  {post.name} {post.nameSecond}
                  <span className={classPage.span}>{post.number}</span>
               </div>
            </div>
         ))}
      </div>
   );
};
export default TextReverse;
