import classAbaddonPage from '../AbaddonPage.module.css';

const AbaddoneStatsLine = props => {
   return (
      <div>
         <div className={classAbaddonPage.lineDisplay}>
            <div className={classAbaddonPage.displayColumn}>
               <img
                  className={classAbaddonPage.pictureHero}
                  src={props.stats[0].imgHero}
                  alt="heroPict"
               />
               <div className={classAbaddonPage.healthBox}>
                  {props.stats[0].health}
                  <span className={classAbaddonPage.healthBoxSpan}>
                     {' '}
                     {props.stats[0].healthRegeneration}
                  </span>
               </div>
               <div className={classAbaddonPage.manaBox}>
                  {props.stats[0].mana}
                  <span className={classAbaddonPage.manaBoxSpan}>
                     {' '}
                     {props.stats[0].manaRegeneration}{' '}
                  </span>
               </div>

               <div className={classAbaddonPage.titleAtr}>Attributes</div>
            </div>
            <div>
               <div>
                  <div className={classAbaddonPage.displayColumnAtr}>
                     <div className={classAbaddonPage.textAtrStats}>
                        <img
                           src={props.stats[0].strengthAtr}
                           alt="atribute"
                           className={classAbaddonPage.statsLineAtr}
                        />
                        {props.stats[0].strengthAtrNumber}{' '}
                        <span className={classAbaddonPage.textAtrStatsSpan}>
                           {' '}
                           {props.stats[0].strengthAtrNumberPlus}{' '}
                        </span>
                     </div>

                     <div className={classAbaddonPage.textAtrStats}>
                        <img
                           src={props.stats[0].agilityAtr}
                           alt="atribute"
                           className={classAbaddonPage.statsLineAtr}
                        />
                        {props.stats[0].agilityAtrNumber}{' '}
                        <span className={classAbaddonPage.textAtrStatsSpan}>
                           {' '}
                           {props.stats[0].agilityAtrNumberPlus}
                        </span>
                     </div>

                     <div className={classAbaddonPage.textAtrStats}>
                        <img
                           src={props.stats[0].intelligenciAtr}
                           alt="atribute"
                           className={classAbaddonPage.statsLineAtr}
                        />
                        {props.stats[0].intelligenciAtrNumber}{' '}
                        <span className={classAbaddonPage.textAtrStatsSpan}>
                           {' '}
                           {props.stats[0].intelligenciAtrNumberPlus}
                        </span>
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
                        <div className={props.stats[0].carryBarConteiner}></div>
                     </div>
                  </div>
                  <div className={classAbaddonPage.textRoles}>
                     Disabler
                     <div className={classAbaddonPage.barBackground}></div>
                  </div>
                  <div className={classAbaddonPage.textRoles}>
                     Escape
                     <div className={classAbaddonPage.barBackground}></div>
                  </div>
               </div>

               <div className={classAbaddonPage.displayColumnRoles}>
                  <div className={classAbaddonPage.textRoles}>
                     Support
                     <div className={classAbaddonPage.barBackground}>
                        <div
                           className={props.stats[0].supportBarConteiner}
                        ></div>
                     </div>
                  </div>
                  <div className={classAbaddonPage.textRoles}>
                     Jungler
                     <div className={classAbaddonPage.barBackground}></div>
                  </div>
                  <div className={classAbaddonPage.textRoles}>
                     Pusher
                     <div className={classAbaddonPage.barBackground}></div>
                  </div>
               </div>

               <div className={classAbaddonPage.displayColumnRoles}>
                  <div className={classAbaddonPage.textRoles}>
                     Nuker
                     <div className={classAbaddonPage.barBackground}></div>
                  </div>
                  <div className={classAbaddonPage.textRoles}>
                     Durable
                     <div className={classAbaddonPage.barBackground}>
                        <div
                           className={props.stats[0].durableBarConteiner}
                        ></div>
                     </div>
                  </div>
                  <div className={classAbaddonPage.textRoles}>
                     Initiatore
                     <div className={classAbaddonPage.barBackground}></div>
                  </div>
               </div>
            </div>

            <div className={classAbaddonPage.lineDisplay}>
               <div className={classAbaddonPage.statsDisplay}>
                  <div className={classAbaddonPage.titleStats}>Attack</div>
                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].attackLogo}
                        alt="PowerImg"
                     />
                     {props.stats[0].attackNumber}
                  </div>

                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].attackTimeLogo}
                        alt="IntervalPower"
                     />
                     {props.stats[0].attackTimeNumber}
                  </div>

                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].attackDistanceLogo}
                        alt="RangeImg"
                     />
                     {props.stats[0].attackDistanceNumber}
                  </div>

                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].attackSpeedLogo}
                        alt="speed"
                     />
                     {props.stats[0].attackSpeedNumber}
                  </div>
               </div>

               <div className={classAbaddonPage.statsDisplay}>
                  <div className={classAbaddonPage.titleStats}>Defense</div>
                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].defenseLogo}
                        alt="DefenseImg"
                     />
                     {props.stats[0].defenseNumber}
                  </div>

                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].magicResistLogo}
                        alt="MagicResiste"
                     />
                     {props.stats[0].magicResistNumber}
                  </div>
               </div>

               <div className={classAbaddonPage.statsDisplay}>
                  <div className={classAbaddonPage.titleStats}>Mobility</div>
                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].speedMobilityLogo}
                        alt="Speed"
                     />
                     {props.stats[0].speedMobilityNumber}
                  </div>

                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].speedRateLogo}
                        alt="RateImg"
                     />
                     {props.stats[0].speedMobilityNumber}
                  </div>

                  <div className={classAbaddonPage.statsPoint}>
                     <img
                        className={classAbaddonPage.statsPict}
                        src={props.stats[0].visionLogo}
                        alt="VisionImg"
                     />
                     {props.stats[0].visionNumber}
                  </div>
               </div>
            </div>
            <div className={classAbaddonPage.Stats}>Stats</div>
         </div>
         <div className={classAbaddonPage.borderRight}></div>
         <div className={classAbaddonPage.titleRoles}>Roles</div>
      </div>
   );
};

export default AbaddoneStatsLine;
