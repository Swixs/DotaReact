import classPage from '../HeroPage.module.css';
import HeroListSpels from './HeroListSpels';

const Text = ({ posts }) => {
   if (!posts) {
      return null;
   }

   return (
      <div>
         {posts.map(post => (
            <div key={post.id}>
               <div className={classPage.textAtr}>
                  <img
                     src={post.imageUrl}
                     alt="attribute"
                     width={35}
                     height={35}
                  />
                  <div className={classPage.txtArt}>{post.textAtr}</div>
               </div>

               <div className={classPage.title}>{post.name}</div>

               {post.nameSecond && (
                  <div className={classPage.titleForTwoName}>
                     {post.nameSecond}
                  </div>
               )}

               <div className={classPage.subtitle}>{post.subtitle}</div>

               <HeroListSpels posts={posts} />
            </div>
         ))}
      </div>
   );
};

export default Text;
