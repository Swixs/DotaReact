import classAbaddonPage from '../AbaddonPage.module.css';

const TextReverse = props => {
   return (
      <div>
         <div className={classAbaddonPage.grayBar}></div>
         {props.posts.map(post => (
            <div key={post.id} className={classAbaddonPage.textReverse}>
               <img
                  src={post.imageUrl}
                  alt="attribute"
                  width={35}
                  height={35}
               />
               <div className={classAbaddonPage.txtArt}>
                  {post.name}{' '}
                  <span className={classAbaddonPage.span}>{post.number}</span>
               </div>
            </div>
         ))}
      </div>
   );
};

export default TextReverse;
