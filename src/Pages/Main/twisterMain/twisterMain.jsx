import classMain from './../Main.module.css';
import FirstTwisterMain from './twistersMain/firstTwisterMain';

const TwisterMain = () => {
   return (
      <div className={classMain.twisterBackground}>
         <FirstTwisterMain />
      </div>
   );
};

export default TwisterMain;
