import classMain from './../Main.module.css';
import ButtonTextBlock from './Buttons/buttonTextBlock';

const TopMain = () => {
   return (
      <div className={classMain.textBlock}>
         <div className={classMain.title}>“A MODERN MULTIPLAYER</div>
         <div className={classMain.titleUnder}> MASTERPIECE.” </div>
         <div className={classMain.subTitle}> - DESTRUCTOID</div>
         <div className={classMain.subTitleBorder}></div>
         <ButtonTextBlock />
         <div className={classMain.txt}>LATEST NEWS</div>
         <button className={classMain.btnNewsTop}>VIEW ALL 🡢</button>
      </div>
   );
};

export default TopMain;
