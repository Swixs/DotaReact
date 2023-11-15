import classAbaddonPage from '../AbaddonPage.module.css';
import AbaddoneAbilityLeft from './AbaddonAbilityLeft';

const AbaddoneAbility = () => {
    return (
        <div className={classAbaddonPage.pageAbility}>
            <div className={classAbaddonPage.titleAbility}>
                ABILITY DETAILS:
            </div>

            <div>
                <AbaddoneAbilityLeft />
            </div>
        </div>
    )
}

export default AbaddoneAbility