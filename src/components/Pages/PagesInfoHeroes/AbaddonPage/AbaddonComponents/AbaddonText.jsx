import classAbaddonPage from '../AbaddonPage.module.css'
import AbaddonListSpels from './AbadonTextSpels'

const AbaddonText = () => {
    return (
        <div>
            <div className={classAbaddonPage.textAtr}>
                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png"
                    alt="atribute" width={35} height={35} />
                <div className={classAbaddonPage.txtArt}>Universal</div>
            </div>

            <div className={classAbaddonPage.title}>
                Abaddon
            </div>

            <div className={classAbaddonPage.subtitle}>
                SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS
            </div>

            <AbaddonListSpels />
        </div>
    )
}

export default AbaddonText