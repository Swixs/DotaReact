import classMain from './../Main.module.css';
import TwisterMainLeftBorder from './twisterMainBorders/TwisterMainLeftBorder';
import TwisterMainRightBorder from './twisterMainBorders/twisterMainRightBorder';
import FirstTwisterMain from './twistersMain/firstTwisterMain';

const TwisterMain = () => {
   return (
      <div className={classMain.twisterBackground}>
         <FirstTwisterMain />
         <TwisterMainLeftBorder />
         <TwisterMainRightBorder />
      </div>
   );
};

export default TwisterMain;
