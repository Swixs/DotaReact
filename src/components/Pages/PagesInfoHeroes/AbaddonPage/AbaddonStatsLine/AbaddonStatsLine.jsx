import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddoneStatsLine = () => {
    return (
        <div >
            <div className={classAbaddonPage.lineDisplay}>
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

                    <div className={classAbaddonPage.titleAtr}>Attributes</div>
                </div>
                <div>
                    <div>
                        <div className={classAbaddonPage.displayColumnAtr}>
                            <div className={classAbaddonPage.textAtrStats}>
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                                    alt="atribute" className={classAbaddonPage.statsLineAtr} />

                                22 <span className={classAbaddonPage.textAtrStatsSpan}> +2.2 </span>
                            </div>

                            <div className={classAbaddonPage.textAtrStats}>
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                                    alt="atribute" className={classAbaddonPage.statsLineAtr} />
                                23 <span className={classAbaddonPage.textAtrStatsSpan}> +1.3</span>
                            </div>

                            <div className={classAbaddonPage.textAtrStats}>
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                                    alt="atribute" className={classAbaddonPage.statsLineAtr} />
                                19 <span className={classAbaddonPage.textAtrStatsSpan}> +1.6</span>
                            </div>
                        </div>
                        <div className={classAbaddonPage.border}></div>
                    </div>
                </div>

                <div className={classAbaddonPage.Roles}>
                    <div className={classAbaddonPage.displayColumnRoles}>
                        <div className={classAbaddonPage.textRoles}>
                            Carry
                            <div className={classAbaddonPage.barBackground}>
                                <div className={classAbaddonPage.barConteiner}></div>
                            </div>
                        </div>
                        <div className={classAbaddonPage.textRoles}>
                            Disabler
                            <div className={classAbaddonPage.barBackground}>
                            </div>
                        </div>
                        <div className={classAbaddonPage.textRoles}>
                            Escape
                            <div className={classAbaddonPage.barBackground}>
                            </div>
                        </div>
                    </div>


                    <div className={classAbaddonPage.displayColumnRoles}>
                        <div className={classAbaddonPage.textRoles}>
                            Support
                            <div className={classAbaddonPage.barBackground}>
                                <div className={classAbaddonPage.barConteiner70}></div>
                            </div>
                        </div>
                        <div className={classAbaddonPage.textRoles}>
                            Jungler
                            <div className={classAbaddonPage.barBackground}>
                            </div>
                        </div>
                        <div className={classAbaddonPage.textRoles}>
                            Pusher
                            <div className={classAbaddonPage.barBackground}>
                            </div>
                        </div>
                    </div>

                    <div className={classAbaddonPage.displayColumnRoles}>
                        <div className={classAbaddonPage.textRoles}>
                            Nuker
                            <div className={classAbaddonPage.barBackground}>
                            </div>
                        </div>
                        <div className={classAbaddonPage.textRoles}>
                            Durable
                            <div className={classAbaddonPage.barBackground}>
                                <div className={classAbaddonPage.barConteiner70}></div>
                            </div>
                        </div>
                        <div className={classAbaddonPage.textRoles}>
                            Initiatore
                            <div className={classAbaddonPage.barBackground}>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={classAbaddonPage.lineDisplay}>
                    <div className={classAbaddonPage.statsDisplay}>
                        <div className={classAbaddonPage.titleStats}>
                            Attack
                        </div>
                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" alt="PowerImg" />
                            46-56
                        </div>

                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" alt="IntervalPower" />
                            1.5
                        </div>

                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" alt="RangeImg" />
                            150
                        </div>

                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png" alt="speed" />
                            900
                        </div>
                    </div>

                    <div className={classAbaddonPage.statsDisplay}>
                        <div className={classAbaddonPage.titleStats}>
                            Defense
                        </div>
                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png" alt="DefenseImg" />
                            2.8
                        </div>

                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png" alt="MagicResiste" />
                            25%
                        </div>
                    </div>

                    <div className={classAbaddonPage.statsDisplay}>
                        <div className={classAbaddonPage.titleStats}>
                            Mobility
                        </div>
                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" alt="Speed" />
                            325
                        </div>

                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png" alt="RateImg" />
                            0.6
                        </div>

                        <div className={classAbaddonPage.statsPoint}>
                            <img className={classAbaddonPage.statsPict} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png" alt="VisionImg" />
                            1800/800
                        </div>
                    </div>
                </div>
                <div className={classAbaddonPage.Stats}>
                    Stats
                </div>
            </div>
            <div className={classAbaddonPage.borderRight}></div>
            <div className={classAbaddonPage.titleRoles}>Roles</div>
        </div>

    )
}

export default AbaddoneStatsLine