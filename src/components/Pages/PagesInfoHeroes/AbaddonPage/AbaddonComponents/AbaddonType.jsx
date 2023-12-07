import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddonType = props => {
   return (
      <div className={classAbaddonPage.contentType}>
         <div className={classAbaddonPage.typeTitle}>Attack type</div>

         <div className={classAbaddonPage.displayType}>
            <img
               className={classAbaddonPage.typeAtr}
               src={props.type[0].imgType}
               alt="typePicture"
            />
            <div className={classAbaddonPage.textType}>
               {props.type[0].nameType}
            </div>
         </div>
         <div className={classAbaddonPage.typeTitle}>
            Complexity
            <div className={classAbaddonPage.displayType}>
               <div className={classAbaddonPage.cubeComplexity}></div>
               <div className={classAbaddonPage.cube}></div>
               <div className={classAbaddonPage.cube}></div>
            </div>
         </div>
      </div>
   );
};

export default AbaddonType;
