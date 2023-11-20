import classAbaddonPage from '../AbaddonPage.module.css';
import AbilityVideo from './AbaddonAbilityVideo';
import AbilityButtons from './AbilityButtons';
import AbilityLineInfo from './AbilityLineInfo';
import AbilityStats from './AbilityStats';
import AbilityStatsRight from './AbilityStatsRight';

const AbaddoneAbilityLeft = () => {
   return (
      <div>
         <AbilityVideo />
         <div>
            <AbilityButtons />
            <div className={classAbaddonPage.abilitiesInfo}>
               <AbilityLineInfo />
               <AbilityStats />
               <AbilityStatsRight />
            </div>
         </div>
      </div>
   );
};

export default AbaddoneAbilityLeft;
