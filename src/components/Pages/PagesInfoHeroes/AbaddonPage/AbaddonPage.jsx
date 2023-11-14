import React from 'react';
import HeaderLine from '../../../Header/HeaderLine';
import classAbaddonPage from './AbaddonPage.module.css';
import AbaddonText from './AbaddonComponents/AbaddonText';
import AbaddonTextReverse from './AbaddonComponents/AbaddonTextReverse';

const AbaddonPage = () => {
    return (
        <div className={classAbaddonPage.page}>
            <HeaderLine />
            <div className={classAbaddonPage.pageContent}>
                <div className={classAbaddonPage.textWrapper}>
                    <AbaddonTextReverse />
                    <AbaddonText />
                    
                </div>
            </div>
        </div>
    );
}

export default AbaddonPage;