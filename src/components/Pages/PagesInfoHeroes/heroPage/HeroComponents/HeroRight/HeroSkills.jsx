import classPage from '../../HeroPage.module.css';

const HeroSkils = () => {
   return (
      <div>
         <div className={classPage.textAbilities}>abilities</div>

         <div>
            <img
               src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg"
               alt="treeSpels"
            />
         </div>
      </div>
   );
};

export default HeroSkils;
