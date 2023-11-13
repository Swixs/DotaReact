import classHeroesInput from './HeroesfilterInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const HeroesInput = () => {

    function onAtribute() {
        console.log(1)
    }


    return (
        <div className={classHeroesInput.box}>
            <div className={classHeroesInput.clue}>
                Filter heroes
            </div>

            <div className={classHeroesInput.text}>
                Attribute
            </div>

            <div>
                <button className={classHeroesInput.btnAtribute} onClick={onAtribute} >
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
            <div className={classHeroesInput.boxInput}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#636363", }} fontSize={25} width={50} />
                <input className={classHeroesInput.input} type="text" />
            </div>
        </div>
    )
}

export default HeroesInput