import classAbaddonPage from '../AbaddonPage.module.css';
import AbaddoneAbilityLeft from './AbaddonAbilityLeft';

const AbaddoneAbility = ({ posts }) => {
   return (
      <div className={classAbaddonPage.pageAbility}>
         <div className={classAbaddonPage.titleAbility}>ABILITY DETAILS:</div>

         <div>
            <AbaddoneAbilityLeft posts={posts} />
         </div>
      </div>
   );
};

export default AbaddoneAbility;
