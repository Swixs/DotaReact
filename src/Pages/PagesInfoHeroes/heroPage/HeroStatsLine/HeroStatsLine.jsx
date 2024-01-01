import classPage from '../../../../style/HeroPage.module.css';

const HeroStatsLine = ({ posts }) => {
   if (!posts || !posts[0] || !posts[0].stats || !posts[0].stats[0]) {
      return null;
   }

   const stats = posts[0].stats[0];
   return (
      <div>
         <div className={classPage.lineDisplay}>
            <div className={classPage.displayColumn}>
               <img
                  className={classPage.pictureHero}
                  src={posts[0].stats[0].imgHero}
                  alt="heroPict"
               />
               <div className={classPage.healthBox}>
                  {posts[0].stats[0].health}
                  <span className={classPage.healthBoxSpan}>
                     {' '}
                     {posts[0].stats[0].healthRegeneration}
                  </span>
               </div>
               <div className={classPage.manaBox}>
                  {posts[0].stats[0].mana}
                  <span className={classPage.manaBoxSpan}>
                     {' '}
                     {posts[0].stats[0].manaRegeneration}{' '}
                  </span>
               </div>

               <div className={classPage.titleAtr}>Attributes</div>
            </div>
            <div>
               <div>
                  <div className={classPage.displayColumnAtr}>
                     <div className={classPage.textAtrStats}>
                        <img
                           src={posts[0].stats[0].strengthAtr}
                           alt="atribute"
                           className={classPage.statsLineAtr}
                        />
                        {posts[0].stats[0].strengthAtrNumber}{' '}
                        <span className={classPage.textAtrStatsSpan}>
                           {' '}
                           {posts[0].stats[0].strengthAtrNumberPlus}{' '}
                        </span>
                     </div>

                     <div className={classPage.textAtrStats}>
                        <img
                           src={posts[0].stats[0].agilityAtr}
                           alt="atribute"
                           className={classPage.statsLineAtr}
                        />
                        {posts[0].stats[0].agilityAtrNumber}{' '}
                        <span className={classPage.textAtrStatsSpan}>
                           {' '}
                           {posts[0].stats[0].agilityAtrNumberPlus}
                        </span>
                     </div>

                     <div className={classPage.textAtrStats}>
                        <img
                           src={posts[0].stats[0].intelligenciAtr}
                           alt="atribute"
                           className={classPage.statsLineAtr}
                        />
                        {posts[0].stats[0].intelligenciAtrNumber}{' '}
                        <span className={classPage.textAtrStatsSpan}>
                           {' '}
                           {posts[0].stats[0].intelligenciAtrNumberPlus}
                        </span>
                     </div>
                  </div>
                  <div className={classPage.border}></div>
               </div>
            </div>

            <div className={classPage.Roles}>
               <div className={classPage.displayColumnRoles}>
                  <div className={classPage.textRoles}>
                     Carry
                     <div className={classPage.barBackground}>
                        <div
                           className={posts[0].stats[0].carryBarConteiner}
                        ></div>
                     </div>
                  </div>
                  <div className={classPage.textRoles}>
                     Disabler
                     <div className={classPage.barBackground}></div>
                  </div>
                  <div className={classPage.textRoles}>
                     Escape
                     <div className={classPage.barBackground}></div>
                  </div>
               </div>

               <div className={classPage.displayColumnRoles}>
                  <div className={classPage.textRoles}>
                     Support
                     <div className={classPage.barBackground}>
                        <div
                           className={posts[0].stats[0].supportBarConteiner}
                        ></div>
                     </div>
                  </div>
                  <div className={classPage.textRoles}>
                     Jungler
                     <div className={classPage.barBackground}></div>
                  </div>
                  <div className={classPage.textRoles}>
                     Pusher
                     <div className={classPage.barBackground}></div>
                  </div>
               </div>

               <div className={classPage.displayColumnRoles}>
                  <div className={classPage.textRoles}>
                     Nuker
                     <div className={classPage.barBackground}></div>
                  </div>
                  <div className={classPage.textRoles}>
                     Durable
                     <div className={classPage.barBackground}>
                        <div
                           className={posts[0].stats[0].durableBarConteiner}
                        ></div>
                     </div>
                  </div>
                  <div className={classPage.textRoles}>
                     Initiatore
                     <div className={classPage.barBackground}></div>
                  </div>
               </div>
            </div>

            <div className={classPage.lineDisplay}>
               <div className={classPage.statsDisplay}>
                  <div className={classPage.titleStats}>Attack</div>
                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].attackLogo}
                        alt="PowerImg"
                     />
                     {posts[0].stats[0].attackNumber}
                  </div>

                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].attackTimeLogo}
                        alt="IntervalPower"
                     />
                     {posts[0].stats[0].attackTimeNumber}
                  </div>

                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].attackDistanceLogo}
                        alt="RangeImg"
                     />
                     {posts[0].stats[0].attackDistanceNumber}
                  </div>

                  {stats.attackSpeedLogo && stats.attackSpeedNumber && (
                     <div className={classPage.statsPoint}>
                        <img
                           className={classPage.statsPict}
                           src={stats.attackSpeedLogo}
                           alt="speed"
                        />
                        {stats.attackSpeedNumber}
                     </div>
                  )}
               </div>

               <div className={classPage.statsDisplay}>
                  <div className={classPage.titleStats}>Defense</div>
                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].defenseLogo}
                        alt="DefenseImg"
                     />
                     {posts[0].stats[0].defenseNumber}
                  </div>

                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].magicResistLogo}
                        alt="MagicResiste"
                     />
                     {posts[0].stats[0].magicResistNumber}
                  </div>
               </div>

               <div className={classPage.statsDisplay}>
                  <div className={classPage.titleStats}>Mobility</div>
                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].speedMobilityLogo}
                        alt="Speed"
                     />
                     {posts[0].stats[0].speedMobilityNumber}
                  </div>

                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].speedRateLogo}
                        alt="RateImg"
                     />
                     {posts[0].stats[0].speedMobilityNumber}
                  </div>

                  <div className={classPage.statsPoint}>
                     <img
                        className={classPage.statsPict}
                        src={posts[0].stats[0].visionLogo}
                        alt="VisionImg"
                     />
                     {posts[0].stats[0].visionNumber}
                  </div>
               </div>
            </div>
            <div className={classPage.Stats}>Stats</div>
         </div>
         <div className={classPage.borderRight}></div>
         <div className={classPage.titleRoles}>Roles</div>
      </div>
   );
};

export default HeroStatsLine;
