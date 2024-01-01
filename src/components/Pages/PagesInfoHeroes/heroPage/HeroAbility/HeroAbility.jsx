import classPage from '../HeroPage.module.css';
import HeroAbilityLeft from './HeroAbilityLeft';

const HeroAbility = ({ posts }) => {
   return (
      <div className={classPage.pageAbility}>
         <div className={classPage.titleAbility}>ABILITY DETAILS:</div>

         <div>
            <HeroAbilityLeft posts={posts} />
         </div>
      </div>
   );
};

export default HeroAbility;
