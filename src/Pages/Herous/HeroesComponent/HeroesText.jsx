import classText from './HeroesText.module.css';

const HeroesText = () => {
   return (
      <div className={classText.text}>
         <div className={classText.title}>choose your hero</div>
         <div className={classText.subtitle}>
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and <br />
            limitlessly diverse. Unleash incredible abilities and devastating
            ultimates on your way to <br />
            victory.
         </div>
      </div>
   );
};

export default HeroesText;
