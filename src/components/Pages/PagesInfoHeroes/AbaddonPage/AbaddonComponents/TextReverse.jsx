import React from 'react';
import classAbaddonPage from '../AbaddonPage.module.css';

const TextReverse = ({ posts }) => {
   if (!posts) {
      return null;
   }

   return (
      <div>
         <div className={classAbaddonPage.grayBar}></div>
         {posts.map(post => (
            <div key={post.id} className={classAbaddonPage.textReverse}>
               <img
                  src={post.imageUrl}
                  alt="attribute"
                  width={35}
                  height={35}
               />
               <div className={classAbaddonPage.txtArt}>
                  {post.name} {post.nameSecond}
                  <span className={classAbaddonPage.span}>{post.number}</span>
               </div>
            </div>
         ))}
      </div>
   );
};
export default TextReverse;
