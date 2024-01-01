import classPage from '../HeroPage.module.css';

const HeroType = props => {
   return (
      <div className={classPage.contentType}>
         <div className={classPage.typeTitle}>Attack type</div>

         <div className={classPage.displayType}>
            <img
               className={classPage.typeAtr}
               src={props.type[0].imgType}
               alt="typePicture"
            />
            <div className={classPage.textType}>{props.type[0].nameType}</div>
         </div>
         <div className={classPage.typeTitle}>
            Complexity
            <div className={classPage.displayType}>
               <div className={props.history[3].firstLevel}></div>
               <div className={props.history[3].secondLevel}></div>
               <div className={props.history[3].thirdLevel}></div>
            </div>
         </div>
      </div>
   );
};

export default HeroType;
