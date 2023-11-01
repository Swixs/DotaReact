import React from 'react';
import HeaderLine from './HeaderLine';
import classHeader from './Header.module.css';
import Video from './Video/video';

const Header = () => {
    return (
        <div className={classHeader.header}>
                <Video />
                <HeaderLine />
        </div>
    );
}

export default Header;