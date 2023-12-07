import classAbaddonPage from '../AbaddonPage.module.css';
import AbaddonListSpels from './AbadonLIstSpels';

const AbaddonText = props => {
   const { posts, history, type } = props;

   if (!posts) {
      return null;
   }
   return (
      <div>
         {props.posts.map(post => (
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

               <div className={classAbaddonPage.subtitle}>{post.subtitle}</div>

               <AbaddonListSpels history={history} type={type} />
            </div>
         ))}
      </div>
   );
};

export default AbaddonText;
