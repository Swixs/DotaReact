import classNews from './../../News.module.css';
import FifthLineButtonNews from './ButtonNewsLinesPages/ButtonNewsLinesFirstPage/FifthLineButtonNews';

import FirstLineButtonNews from './ButtonNewsLinesPages/ButtonNewsLinesFirstPage/FirstLineButtonNews';
import FourthLineButtonNews from './ButtonNewsLinesPages/ButtonNewsLinesFirstPage/FourthLineButtonNews';
import SecondLineButtonNews from './ButtonNewsLinesPages/ButtonNewsLinesFirstPage/SecondLineButtonNews';
import ThirdLineButtonNews from './ButtonNewsLinesPages/ButtonNewsLinesFirstPage/ThirdLineButtonNews';

const ButtonNews = () => {
   return (
      <div className={classNews.linesBtns}>
         <FirstLineButtonNews />
         <SecondLineButtonNews />
         <ThirdLineButtonNews />
         <FourthLineButtonNews />
         <FifthLineButtonNews />
      </div>
   );
};

export default ButtonNews;
