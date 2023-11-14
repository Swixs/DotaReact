import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddoneStatsLine = () => {
    return (
        <div>
            <div className={classAbaddonPage.displayColumn}>
                <img className={classAbaddonPage.pictureHero} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png" alt="heroPict" />
                <div className={classAbaddonPage.healthBox}>
                    604
                    <span className={classAbaddonPage.healthBoxSpan}> +3.2 </span>
                </div>
                <div className={classAbaddonPage.manaBox}>
                    303
                    <span className={classAbaddonPage.manaBoxSpan}> +1.2 </span>
                </div>
            </div>
        </div>

    )
}

export default AbaddoneStatsLine