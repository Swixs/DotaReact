import classAbaddonPage from '../AbaddonPage.module.css';
import AbaddonListSpels from './AbadonLIstSpels';

const Text = ({ posts }) => {
   if (!posts) {
      return null;
   }

   return (
      <div>
         {posts.map(post => (
            <div key={post.id}>
               <div className={classAbaddonPage.textAtr}>
                  <img
                     src={post.imageUrl}
                     alt="attribute"
                     width={35}
                     height={35}
                  />
                  <div className={classAbaddonPage.txtArt}>{post.textAtr}</div>
               </div>

               <div className={classAbaddonPage.title}>{post.name}</div>

               {post.nameSecond && (
                  <div className={classAbaddonPage.titleForTwoName}>
                     {post.nameSecond}
                  </div>
               )}

               <div className={classAbaddonPage.subtitle}>{post.subtitle}</div>

               <AbaddonListSpels posts={posts} />
            </div>
         ))}
      </div>
   );
};

export default Text;
