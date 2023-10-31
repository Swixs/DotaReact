import React from 'react'
import HeaderLine from './HeaderLine'
import classHeader from './Header.module.css'

const Header = () => {
    return (
        <div className={classHeader.header}>
            <HeaderLine />
        </div>
    )
}

export default Header