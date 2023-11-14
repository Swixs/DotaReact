import classAbaddonPage from '../AbaddonPage.module.css';
import { useState } from 'react';
import AbaddonHistory from './AbaddonHistory';
import AbaddonType from './AbaddonType';

const AbaddonListSpels = () => {
    const [showFullHistory, setShowFullHistory] = useState(false);

    const toggleFullHistory = () => {
        setShowFullHistory(!showFullHistory);
    };

    const getContent = () => {
        if (showFullHistory) {
            return (
                <div className={classAbaddonPage.scrollableText}>
                    <AbaddonHistory />
                </div>
            );
        } else {
            return (
                <div className={classAbaddonPage.text}>
                    Able to transform enemy attacks into{' '}
                    <span className={classAbaddonPage.spanList}>self-healing</span>, Abaddon can survive almost any
                    assault. <span className={classAbaddonPage.spanList}>Shielding allies </span> and launching his{' '}
                    <span className={classAbaddonPage.spanList}>double-edged </span> coil at a friend or foe, he is
                    always ready to ride into the thick of battle.
                </div>
            );
        }
    };

    const getAbaddonType = () => {
        return showFullHistory ? null : <AbaddonType />;
    };

    return (
        <div className={classAbaddonPage.container}>
            {getContent()}

            <div>
                <button className={classAbaddonPage.btnText} onClick={toggleFullHistory}>
                    {showFullHistory ? 'Close History' : 'Read Full History'}
                </button>
            </div>

            {getAbaddonType()}
        </div>
    );
}

export default AbaddonListSpels;