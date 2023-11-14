import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddonType = () => {
    return (
        <div className={classAbaddonPage.contentType}>
            <div className={classAbaddonPage.typeTitle}>
                Attack type
            </div>

            <div className={classAbaddonPage.displayType}>
                <img className={classAbaddonPage.typeAtr} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg"
                    alt="typePicture" />
                <div className={classAbaddonPage.textType}>
                    Melee
                </div>


            </div>
            <div className={classAbaddonPage.typeTitle}>
                Complexity
                <div className={classAbaddonPage.displayType}>
                    <div className={classAbaddonPage.cubeComplexity}></div>
                    <div className={classAbaddonPage.cube}></div>
                    <div className={classAbaddonPage.cube}></div>
                </div>
            </div>
        </div>
    )
}

export default AbaddonType