import classHeroesInput from './HeroesfilterInput.module.css'

const HeroesInput = () => {
    return (
        <div className={classHeroesInput.box}>
            <div className={classHeroesInput.clue}>
                Filter heroes
            </div>

            <div className={classHeroesInput.text}>
                Attribute
            </div>

            <div>
                <button className={classHeroesInput.btnAtribute} >
                    <img className={classHeroesInput.atribute} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png" alt="atribute" />
                </button>

                <button className={classHeroesInput.btnAtribute}>
                    <img className={classHeroesInput.atribute} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png" alt="atribute" />
                </button>

                <button className={classHeroesInput.btnAtribute}>
                    <img className={classHeroesInput.atribute} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png" alt="atribute" />
                </button>

                <button className={classHeroesInput.btnAtribute}>
                    <img className={classHeroesInput.atribute} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png" alt="atribute" />
                </button>

            </div>

            <div className={classHeroesInput.text}>
                Complexity
            </div>

            <div>
                <button className={classHeroesInput.btnAtribute}>
                    <img className={classHeroesInput.atribute} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png" alt="" />
                </button>
                <button className={classHeroesInput.btnAtribute}>
                    <img className={classHeroesInput.atribute} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png" alt="" />
                </button>
                <button className={classHeroesInput.btnAtribute}>
                    <img className={classHeroesInput.atribute} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png" alt="" />
                </button>
            </div>

            <input className={classHeroesInput.input} type="text"  />
        </div>
    )
}

export default HeroesInput