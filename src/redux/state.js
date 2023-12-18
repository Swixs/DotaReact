import classAbaddonPage from '../components/Pages/PagesInfoHeroes/AbaddonPage/AbaddonPage.module.css';

const state = {
   AbaddonePage: [
      {
         posts: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png',
               name: 'Abaddon',
               textAtr: 'Universal',
               number: 102,
               subtitle: 'SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS',
               type: [
                  {
                     imgType:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg',
                     nameType: 'MELEE',
                  },
               ],
               history: [
                  {
                     firstChapterHistory: `The Font of Avernus is the source of a family's strength, a crack in 
             primal stones from which vapors of prophetic power have issued for generations. Each 
             newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism 
             they are given an innate connection to the mystic energies of the land. They grow up 
             believing themselves fierce protectors of their lineal traditions, the customs of the 
             realm--but what they really are protecting is the Font itself. And the motives of the 
             mist are unclear.`,
                     secondChapterHistory: `When the infant Abaddon was bathed in the Font, they say something went
             awry. In the child's eyes there flared a light of comprehension that
             startled all present and set the sacerdotes to whispering. He was
             raised with every expectation of following the path all scions of
             Avernus took--to train in war, that in times of need he might lead the
             family's army in defense of the ancestral lands. But Abaddon was always
             one apart. Where others trained with weapons, he bent himself to
             meditation in the presence of the mist. He drank deep from the vapors
             that welled from the Font, learning to blend his spirit with the
             potency that flowed from far beneath the House; he became a creature of
             the black mist.`,
                     thirdChapterHistory: `There was bitterness within the House Avernus--elders and young alike
             accusing him of neglecting his responsibilities. But all such
             accusations stopped when Abaddon rode into battle, and they saw how the
             powers of the mist had given him mastery over life and death beyond
             those of any lord the House had ever known.`,
                  },
                  {
                     summaryTextFirst: `Able to transform enemy attacks into`,
                     summaryTextSecond: ` Abaddon can survive almost any assault.`,
                     summaryTextThird: `and launching his`,
                     summaryTextFourth: `coil at a friend or foe, he is always ready to ride into the
             thick of battle.`,
                  },
                  {
                     nameSpellFirst: `self-healing`,
                     nameSpellSecond: ` Shielding allies`,
                     nameSpellThird: `double-edged`,
                  },
                  {
                     firstLevel: classAbaddonPage.cubeComplexityFirst,
                     secondLevel: classAbaddonPage.cube,
                     thirdLevel: classAbaddonPage.cube,
                  },
               ],
               video: [
                  {
                     videoHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm`,
                  },
               ],
               stats: [
                  {
                     imgHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png`,
                     health: 604,
                     mana: 303,
                     healthRegeneration: '+3.2',
                     manaRegeneration: '+1.2',
                     strengthAtr: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`,
                     strengthAtrNumber: '22',
                     strengthAtrNumberPlus: '+2.2',
                     agilityAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
                     agilityAtrNumber: '23',
                     agilityAtrNumberPlus: '+1.3',
                     intelligenciAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
                     intelligenciAtrNumber: '19',
                     intelligenciAtrNumberPlus: '+1.6',
                     carryBarConteiner: classAbaddonPage.barConteiner,
                     supportBarConteiner: classAbaddonPage.barConteiner70,
                     durableBarConteiner: classAbaddonPage.barConteiner70,
                     attackLogo:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
                     attackNumber: `46-56`,
                     attackTimeLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png`,
                     attackTimeNumber: `1.5`,
                     attackDistanceLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png`,
                     attackDistanceNumber: `150`,
                     attackSpeedLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png`,
                     attackSpeedNumber: `900`,
                     defenseLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png`,
                     defenseNumber: `2.8`,
                     magicResistLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png`,
                     magicResistNumber: `25%`,
                     speedMobilityLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedMobilityNumber: `325`,
                     speedRateLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedRateNumber: `0.6`,
                     visionLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png`,
                     visionNumber: `1800/800`,
                  },
               ],
               videoSpells: [
                  {
                     videoSpellFirst:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.webm',
                     videoSpellSecond:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.mp4',
                     videoSpellThird:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.mp4',
                     videoSpellFoutrh:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_borrowed_time.mp4',
                  },
               ],
               spellsImg: [
                  {
                     firstSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png',
                     secondSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png',
                     thirdSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_frostmourne.png',
                     fourthSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_borrowed_time.png',
                  },
               ],
               firstSpellsDetails: [
                  {
                     nameSpell: `MIST COIL`,
                     textSpell: `Abaddon releases a coil of deathly mist that can damage an
                     enemy unit or heal a friendly unit at the cost of some of
                     Abaddon's health.`,
                     firstInfoSpell: `ABILITY:`,
                     secondInfoSpell: `AFFECTS:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Unit Target`,
                     secondStatsInfoSpell: `Heroes`,
                     thirdStatsInfoSpell: `Magical`,
                     colorTextSpell: classAbaddonPage.spanAbilityMagical,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     immunitySpell: 'Allies Yes Enemies No',
                     statsSpellFirst: '40.0%',
                     preStatsSpellFirst: `SELF DAMAGE:`,
                     statsSpellSecond: `100.0 / 175.0 / 250.0 / 325.0`,
                     preStatsSpellSecond: `DAMAGE/HEAL:`,
                     preStatsSpellThird: `CAST RANGE:`,
                     statsSpellThird: `600.0 / 625.0 / 650.0 / 675.0`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: ` 6.5 / 6.0 / 5.5 / 5.0`,
                     manaSpell: `50`,
                     historySpell: `A mysterious vapor from the Font of Avernus now infuses the
             breath of Abaddon, who releases it at will.`,
                  },
               ],
               secondSpellsDetails: [
                  {
                     classTextAbilityRightSecond:
                        classAbaddonPage.abilityStatsRightSecond,
                     nameSpell: `APHOTIC SHIELD`,
                     textSpell: `Summons dark energies around an ally unit, creating an all
               damage barrier that absorbs a set amount of damage before
               expiring. When the barrier is destroyed it will burst and deal
               damage equal to the amount it could absorb to an area around
               it. Removes certain types of negative buffs and stuns on cast.`,
                     subtextSpell: `DISPEL TYPE: Strong Dispel`,
                     firstInfoSpell: `ABILITY:`,
                     secondInfoSpell: `AFFECTS:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Unit Target`,
                     secondStatsInfoSpell: `Allied Units`,
                     thirdStatsInfoSpell: `Magical`,
                     statsSpellFirst: `15.0`,
                     statsSpellSecond: `675.0`,
                     statsSpellThird: `120.0 / 150.0 / 180.0 / 210.0`,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     preDisableSpell: `DISABLE:`,
                     immunitySpell: 'No',
                     dissableSpell: `Yes`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `12.0 / 10.0 / 8.0 / 6.0`,
                     manaSpell: `95 / 110 / 125 / 140`,
                     historySpell: `The powers of the black mist rise to absorb attacks like the black mist absorbs light.`,
                     colorTextSpell: classAbaddonPage.spanAbilityMagical,
                     preStatsSpellFirst: `DURATION:`,
                     preStatsSpellSecond: `BURST RADIUS:`,
                     preStatsSpellThird: `DAMAGE BARRIER:`,
                  },
               ],
               thirdSpellsDetails: [
                  {
                     nameSpell: `CURSE OF AVERNUS`,
                     textSpell: `Abaddon strikes an enemy, slowing the target's movement speed. If the target gets hit 4.0 times, they become affected
                by a chilling curse causing them to be silenced and slowed, and all attacks against them gain an attack speed boost.`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `Passive`,
                     statsSpellFirst: `5.0`,
                     statsSpellSecond: `10.0% / 15.0% / 20.0% / 25.0%`,
                     statsSpellThird: `4.5`,
                     statsSpellFourth: `15.0% / 30.0% / 45.0% / 60.0%`,
                     statsSpellFifth: `60.0 / 80.0 / 100.0 / 120.0`,
                     preImmunitySpell: `PIERCES SPELL IMMUNITY:`,
                     preDisable: `DISABLE:`,
                     immunitySpell: 'No',
                     dissableSpell: `Yes`,
                     historySpell: `While the baptized draw strength from the Font, the gifts of Avernus are debilitating to the uninitiated.`,
                     preStatsSpellFirst: `BASIC DURATION:`,
                     preStatsSpellSecond: `BASIC SLOW:`,
                     preStatsSpellThird: `CURSE DURATION:`,
                     preStatsSpellFourth: `CURSE SLOW:`,
                     preStatsSpellFifth: `CURSE ATTACK SPEED:`,
                  },
               ],
               fourthSpellsDetails: [
                  {
                     nameSpell: `BORROWED TIME`,
                     textSpell: `When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed.
                If the ability is not on cooldown, it will automatically activate if your health falls below 400.0.`,
                     subtextSpell: `DISPEL TYPE: Strong Dispel`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `No Target`,
                     statsSpellFirst: `400.0`,
                     statsSpellSecond: `4.0 / 5.0 / 6.0`,
                     statsSpellThird: `7.0 / 8.0 / 9.0`,
                     statsSpellFourth: `525.0`,
                     statsSpellFifth: `1200.0`,
                     preDissableSpell: `DISABLE:`,
                     dissableSpell: `No`,
                     historySpell: `The most unnatural of all the gifts of the Font of Avernus, this power defies mortal understanding. 
               What should hurt, instead heals; and what should kill gives strength anew.`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `70.0 / 60.0 / 50.0`,
                     manaSpell: `0 / 0 / 0`,
                     preStatsSpellFirst: `HEALTH THRESHOLD:`,
                     preStatsSpellSecond: `DURATION:`,
                     preStatsSpellThird: `DURATION:`,
                     preStatsSpellFourth: `DAMAGE THRESHOLD:`,
                     preStatsSpellFifth: `RANGE:`,
                  },
               ],
               leftButton: [
                  {
                     namePreviousHero: `ZEUS`,
                     atrPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`,
                     typePreviousHero: `RANGED`,
                     imgPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/zuus.png`,
                  },
               ],
               rightButton: [
                  {
                     nameNextHero: `ALCHEMIST`,
                     atrNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`,
                     typeNextHero: `MELEE`,
                     imgNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/alchemist.png`,
                     linkNextHero: `/heroes/Alchemist`,
                  },
               ],
               btnArrow: [
                  {
                     linkLeftArrowBtn: `/heroes/Zeus`,
                     linkRightArrowBtn: `/heroes/Alchemist`,
                  },
               ],
            },
         ],
      },
   ],
   AlchemistPage: [
      {
         posts: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png',
               name: 'Alchemist',
               textAtr: 'Strength',
               number: 60,
               subtitle: 'EARNS EXTRA GOLD FROM UNIT KILLS AND BOUNTY RUNES',
               type: [
                  {
                     imgType:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg',
                     nameType: 'MELEE',
                  },
               ],
               history: [
                  {
                     firstChapterHistory: `The sacred science of Chymistry was a Darkbrew family
                      tradition, but no Darkbrew had ever shown the kind of 
                     creativity, ambition, and recklessness of young Razzil. However,
                      when adulthood came calling he pushed aside the family trade
                       to try his hand at manufacturing gold through Alchemy.`,
                     secondChapterHistory: `In an act of audacity befitting his reputation, Razzil announced
                      he would transmute an entire mountain into gold. Following two 
                      decades of research and spending and preparation, he failed 
                      spectacularly, quickly finding himself imprisoned for the 
                      widespread destruction his experiment wrought. Yet Razzil was 
                      never one to take a setback lightly, and sought escape to 
                      continue his research.`,
                     thirdChapterHistory: `
                     When his new cellmate turned out to be a fierce ogre, he found
                     just the opportunity he needed. After convincing the ogre not to
                     eat him, Razzil set about carefully concocting a tincture for it to
                     drink, made from the moulds and mosses growing in the prison
                     stone work. In a week's time, it seemed ready. When the ogre
                     drank the potion, it flew into an unstoppable berserker rage,
                     destroying the cell bars and exploding through walls and guards
                     alike.
                     They soon found themselves lost somewhere in the forest
                     surrounding the city with a trail of wreckage in their wake and
                     no signs of pursuit. In the tonic's afterglow, the ogre seemed
                     serene, happy, and even eager. Resolving to work together, the
                     pair set off to collect the materials needed to attempt Razzil's
                     Alchemic transmutation once more.
                  `,
                  },
                  {
                     summaryTextFirst: `Synthesizing`,
                     summaryTextSecond: ` from each and every kill, Alchemist has no trouble 
                     gathering the tools needed to destroy his foes. Ambushing enemies with`,
                     summaryTextThird: `and a host of`,
                     summaryTextFourth: `, he battles to ensure his greedy escapades can remain uninterrupted..`,
                  },
                  {
                     nameSpellFirst: `extra resources`,
                     nameSpellSecond: ` corrosive acid`,
                     nameSpellThird: `unstable chemicals`,
                  },
                  {
                     firstLevel: classAbaddonPage.cubeComplexityFirst,
                     secondLevel: classAbaddonPage.cube,
                     thirdLevel: classAbaddonPage.cube,
                  },
               ],
               video: [
                  {
                     videoHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/alchemist.webm`,
                  },
               ],
               stats: [
                  {
                     imgHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png`,
                     health: 626,
                     mana: 375,
                     healthRegeneration: '+2.5',
                     manaRegeneration: '+1.3',
                     strengthAtr: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`,
                     strengthAtrNumber: '23',
                     strengthAtrNumberPlus: '+2.7',
                     agilityAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
                     agilityAtrNumber: '22',
                     agilityAtrNumberPlus: '+1.5',
                     intelligenciAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
                     intelligenciAtrNumber: '25',
                     intelligenciAtrNumberPlus: '+1.8',
                     carryBarConteiner: classAbaddonPage.barConteiner,
                     supportBarConteiner: classAbaddonPage.barConteiner70,
                     durableBarConteiner: classAbaddonPage.barConteiner70,
                     attackLogo:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
                     attackNumber: `50-56`,
                     attackTimeLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png`,
                     attackTimeNumber: `1.7`,
                     attackDistanceLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png`,
                     attackDistanceNumber: `150`,
                     attackSpeedLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png`,
                     attackSpeedNumber: `900`,
                     defenseLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png`,
                     defenseNumber: `3.7`,
                     magicResistLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png`,
                     magicResistNumber: `25%`,
                     speedMobilityLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedMobilityNumber: `295`,
                     speedRateLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedRateNumber: `0.6`,
                     visionLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png`,
                     visionNumber: `1800/800`,
                  },
               ],
               videoSpells: [
                  {
                     videoSpellFirst:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_acid_spray.mp4',
                     videoSpellSecond:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_unstable_concoction.mp4',
                     videoSpellThird:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_corrosive_weaponry.mp4',
                     videoSpellFoutrh:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/alchemist/alchemist_chemical_rage.mp4',
                  },
               ],
               spellsImg: [
                  {
                     firstSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png',
                     secondSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction.png',
                     thirdSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_corrosive_weaponry.png',
                     fourthSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png',
                  },
               ],
               firstSpellsDetails: [
                  {
                     nameSpell: `ACID SPRAY`,
                     textSpell: `Sprays high-pressure acid across a target area.
                      Enemy units who step across the contaminated terrain take 
                     damage per second and have their armor reduced.`,
                     firstInfoSpell: `ABILITY:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Point Target`,
                     thirdStatsInfoSpell: `Physical`,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     colorTextSpell: classAbaddonPage.spanAbilityPhysical,
                     immunitySpell: 'No',
                     preStatsSpellFirst: `RADIUS:`,
                     preStatsSpellSecond: `DURATION:`,
                     preStatsSpellThird: `DAMAGE PER SECOND:`,
                     preStatsSpellFourth: `ARMOR REDUCTION:`,
                     statsSpellFirst: '400.0 / 475.0 / 550.0 / 625.0',
                     statsSpellSecond: `15.0`,
                     statsSpellThird: `25.0 / 30.0 / 35.0 / 40.0`,
                     statsSpellFourth: `3.0 / 4.0 / 5.0 / 6.0`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: ` 22.0 / 21.0 / 20.0 / 19.0`,
                     manaSpell: `120`,
                     historySpell: `Using traditional Alchemy from the Darkbrew family, Razzil concocts an acid that dissolves 
                     even the toughest metals.`,
                  },
               ],
               secondSpellsDetails: [
                  {
                     nameSpell: `UNSTABLE CONCOCTION`,
                     textSpell: `Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal 
                     damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. 
                     Alchemist is faster while charging the concoction. After 5.0 seconds, the brew reaches its maximum damage and stun time. 
                     However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown.`,
                     firstInfoSpell: `ABILITY:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Unit Target`,
                     thirdStatsInfoSpell: `Physical`,
                     statsSpellFirst: `1.7 / 2.2 / 2.7 / 3.2`,
                     statsSpellSecond: `150.0 / 220.0 / 290.0 / 360.0`,
                     statsSpellThird: `250.0`,
                     statsSpellFourth: `4.0% / 8.0% / 12.0% / 16.0%`,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     classTextAbilityRightSecond:
                        classAbaddonPage.abilityStatsRightSecond,
                     immunitySpell: 'No',
                     preDisableSpell: `DISABLE:`,
                     dissableSpell: `Only Strong Dispels`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `15.0`,
                     manaSpell: `100`,
                     historySpell: `A silver lining to the failure of turning a mountain into gold, this volatile solution has destructive potential.`,
                     colorTextSpell: classAbaddonPage.spanAbilityPhysical,
                     preStatsSpellFirst: `MAX STUN:`,
                     preStatsSpellSecond: `MAX DAMAGE:`,
                     preStatsSpellThird: `EXPLOSION RADIUS:`,
                     preStatsSpellFourth: `MOVE SPEED BONUS:`,
                  },
               ],
               thirdSpellsDetails: [
                  {
                     nameSpell: `CORROSIVE WEAPONRY`,
                     textSpell: `Alchemist coats his weapons with an acid that applies a
                      stacking slow and status resistance reduction to enemies hit. Slow 
                      and Status resistance increases when Alchemist is under the effect of 
                      Chemical Rage.`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `Passive`,
                     statsSpellFirst: `4.0 / 6.0 / 8.0 / 10.0`,
                     statsSpellSecond: `3.5`,
                     statsSpellThird: `3.0% / 4.0% / 5.0% / 6.0%`,
                     statsSpellFourth: `3.0% / 4.0% / 5.0% / 6.0%`,
                     statsSpellFifth: `1.5%`,
                     preImmunitySpell: `PIERCES SPELL IMMUNITY:`,
                     immunitySpell: 'No',
                     classImunitySpell:
                        classAbaddonPage.spanSecondAbilityRightOneSpell,
                     historySpell: ``,
                     preStatsSpellFirst: `MAX STACKS:`,
                     preStatsSpellSecond: `DEBUFF DURATION:`,
                     preStatsSpellThird: `MOVEMENT SLOW PER STACK:`,
                     preStatsSpellFourth: `STATUS RESISTANCE REDUCTION PER STACK:`,
                     preStatsSpellFifth: `CHEMICAL RAGE BONUS:`,
                  },
               ],
               fourthSpellsDetails: [
                  {
                     nameSpell: `CHEMICAL RAGE`,
                     textSpell: `Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing 
                     movement speed and health regeneration.`,
                     subtextSpell: `DISPEL TYPE: Basic Dispel`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `No Target`,
                     statsSpellFirst: `30.0`,
                     statsSpellSecond: `1.2 / 1.1 / 1.0`,
                     statsSpellThird: `50.0 / 80.0 / 110.0`,
                     statsSpellFourth: `30.0 / 45.0 / 60.0`,
                     statsSpellFifth: `25.0`,
                     statsSpellSixth: `5.0%`,
                     preDissableSpell: `DISABLE:`,
                     dissableSpell: `No`,
                     historySpell: `The brew Razzil gave to the Ogre during their prison bust has 
                     become a useful potion in the midst of combat.`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `60.0`,
                     manaSpell: `50 / 75 / 100`,
                     preStatsSpellFirst: `DURATION:`,
                     preStatsSpellSecond: `BASE ATTACK TIME:`,
                     preStatsSpellThird: `BONUS HEALTH REGEN:`,
                     preStatsSpellFourth: `BONUS MOVE SPEED:`,
                     preStatsSpellFifth: `BONUS DAMAGE PER SCEPTER:`,
                     preStatsSpellSixth: `SPELL AMP PER SCEPTER:`,
                  },
               ],
               leftButton: [
                  {
                     namePreviousHero: `Abaddon`,
                     atrPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png`,
                     typePreviousHero: `MELEE`,
                     imgPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/abaddon.png`,
                     linkPreviousHero: `/heroes/Abaddon`,
                  },
               ],
               rightButton: [
                  {
                     nameNextHero: `ANCIENT`,
                     secondNameNextHero: `APPARITION`,
                     atrNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`,
                     typeNextHero: `RANGED`,
                     imgNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/ancient_apparition.png`,
                     linkNextHero: `/heroes/Ancientapparition`,
                  },
               ],
               btnArrow: [
                  {
                     leftArrowBtn: classAbaddonPage.btnArrowFix,
                     rightArrowBtn: classAbaddonPage.btnArrowRightFix,
                     centerBtn: classAbaddonPage.buttonCubeFix,
                     linkLeftArrowBtn: `/heroes/Abaddon`,
                     linkRightArrowBtn: `/heroes/Ancientapparition`,
                  },
               ],
            },
         ],
      },
   ],
   AncientapparitionPage: [
      {
         posts: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
               name: 'ANCIENT',
               nameSecond: 'APPARITION',
               textAtr: 'INTELLIGENCE',
               number: 43,
               subtitle:
                  'LAUNCHES A POWERFUL ICY BLAST FROM ANYWHERE ON THE MAP',
               type: [
                  {
                     imgType:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg',
                     nameType: 'RANGED',
                  },
               ],
               history: [
                  {
                     firstChapterHistory: `Kaldr, the Ancient Apparition, is an image projected from outside time. He springs from the cold, 
                     infinite void that both predates the universe and awaits its end. Kaldr is, Kaldr was, Kaldr shall be...and what we perceive, 
                     powerful as it appears to us, is but the faintest faded echo of the true, eternal Kaldr. Some believe that as the cosmos ages 
                     and approaches its final moments, the brightness and power of Kaldr will also intensify--that the Ancient Apparition will grow younger 
                     and stronger as eternity's end draws nigh. His grip of ice will bring all matter to a stop, his image will cast
                      a light too terrible to behold. An Apparition no longer!`,
                  },
                  {
                     summaryTextFirst: `Able to launch a powerful blast of `,
                     summaryTextSecond: `across the battlefield, Ancient Apparition threatens to shatter weakened enemies 
                     wherever they are. Slowing enemies as he enhances his allies'
                      effectiveness in battle, he is a constant threat to his foes.`,
                  },
                  {
                     nameSpellFirst: `damaging ice`,
                  },
                  {
                     firstLevel: classAbaddonPage.cubeComplexityFirst,
                     secondLevel: classAbaddonPage.cubeComplexity,
                     thirdLevel: classAbaddonPage.cube,
                  },
               ],
               video: [
                  {
                     videoHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/ancient_apparition.webm`,
                  },
               ],
               stats: [
                  {
                     imgHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png`,
                     health: 560,
                     mana: 351,
                     healthRegeneration: '+2.3',
                     manaRegeneration: '+1.1',
                     strengthAtr: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`,
                     strengthAtrNumber: '20',
                     strengthAtrNumberPlus: '+1.9',
                     agilityAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
                     agilityAtrNumber: '20',
                     agilityAtrNumberPlus: '+2.2',
                     intelligenciAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
                     intelligenciAtrNumber: '23',
                     intelligenciAtrNumberPlus: '+3.1',
                     carryBarConteiner: classAbaddonPage.barConteiner,
                     supportBarConteiner: classAbaddonPage.barConteiner70,
                     durableBarConteiner: classAbaddonPage.barConteiner70,
                     attackLogo:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
                     attackNumber: `44-54`,
                     attackTimeLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png`,
                     attackTimeNumber: `1.7`,
                     attackDistanceLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png`,
                     attackDistanceNumber: `675`,
                     attackSpeedLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png`,
                     attackSpeedNumber: `1250`,
                     defenseLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png`,
                     defenseNumber: `2.3`,
                     magicResistLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png`,
                     magicResistNumber: `25%`,
                     speedMobilityLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedMobilityNumber: `285`,
                     speedRateLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedRateNumber: `0.6`,
                     visionLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png`,
                     visionNumber: `1800/800`,
                  },
               ],
               videoSpells: [
                  {
                     videoSpellFirst:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_cold_feet.webm',
                     videoSpellSecond:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_ice_vortex.mp4',
                     videoSpellThird:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_chilling_touch.mp4',
                     videoSpellFoutrh:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/ancient_apparition/ancient_apparition_ice_blast.mp4',
                  },
               ],
               spellsImg: [
                  {
                     firstSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_cold_feet.png',
                     secondSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_vortex.png',
                     thirdSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_chilling_touch.png',
                     fourthSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/ancient_apparition_ice_blast.png',
                  },
               ],
               firstSpellsDetails: [
                  {
                     nameSpell: `COLD FEET`,
                     textSpell: `Places a frozen hex on an enemy unit that deals damage over time, but can be dispelled by moving away from the initial cast point.  
                     If the enemy unit doesn't move outside of the given range, it will be stunned and frozen in place after 4 seconds.`,
                     firstInfoSpell: `ABILITY:`,
                     secondInfoSpell: `AFFECTS:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Unit Target`,
                     secondStatsInfoSpell: `Enemy Units`,
                     thirdStatsInfoSpell: `Magical`,
                     colorTextSpell: classAbaddonPage.spanAbilityMagical,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     immunitySpell: 'No',
                     preStatsSpellFirst: `DAMAGE PER SECOND:`,
                     preStatsSpellSecond: `BREAK DISTANCE:`,
                     preStatsSpellThird: `STUN DURATION:`,
                     preStatsSpellFourth: `CAST RANGE:`,
                     statsSpellFirst: '30 / 50 / 70 / 90',
                     statsSpellSecond: `715`,
                     statsSpellThird: `1,6 / 2 / 2,4 / 2,8`,
                     statsSpellFourth: `700 / 800 / 900 / 1000`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `15 / 13 / 11 / 9`,
                     manaSpell: `125`,
                     historySpell: `Kaldr's presence draws those around him into a frozen void, threatening to lock them in an icy prison for eternity.`,
                  },
               ],
               secondSpellsDetails: [
                  {
                     nameSpell: `ICE VORTEX`,
                     textSpell: `Creates a vortex of icy energy that deals damage, slows and increases magic damage done to enemies in its range.`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `Point Target`,
                     statsSpellFirst: `300`,
                     statsSpellSecond: `-16% / -19% / -22% / -25%`,
                     statsSpellThird: `-16% / -19% / -22% / -25%`,
                     statsSpellFourth: `12 / 18 / 24 / 30`,
                     statsSpellFifth: `6 / 8 / 10 / 12`,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     classTextAbilityRightSecond:
                        classAbaddonPage.abilityStatsRightSecond,
                     immunitySpell: 'No',
                     preDisableSpell: `DISABLE:`,
                     dissableSpell: `No`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `10 / 8 / 6 / 4`,
                     manaSpell: `40 / 50 / 60 / 70`,
                     historySpell: `A silver lining to the failure of turning a mountain into gold, this volatile solution has destructive potential.`,
                     preStatsSpellFirst: `RADIUS:`,
                     preStatsSpellSecond: `MAX DAMAGE:`,
                     preStatsSpellThird: `EXPLOSION RADIUS:`,
                     preStatsSpellFourth: `MOVE SPEED BONUS:`,
                     preStatsSpellFifth: `DURATION:`,
                  },
               ],
               thirdSpellsDetails: [
                  {
                     nameSpell: `CHILLING TOUCH`,
                     textSpell: `Enhances Ancient Apparition's attack with increased range, heavy magic damage, and movement slow.`,
                     firstInfoSpell: `ABILITY:`,
                     secondInfoSpell: `AFFECTS:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Passive`,
                     secondStatsInfoSpell: `Enemy Units`,
                     thirdStatsInfoSpell: `Magical`,
                     colorTextSpell: classAbaddonPage.spanAbilityMagical,
                     statsSpellFirst: `40 / 80 / 120 / 160`,
                     statsSpellSecond: `100%`,
                     statsSpellThird: `0,7 / 0,8 / 0,9 / 1`,
                     statsSpellFourth: `60 / 120 / 180 / 240`,
                     preDisable: `DISABLE:`,
                     dissableSpell: `Yes`,
                     preImmunitySpell: `PIERCES SPELL IMMUNITY:`,
                     immunitySpell: 'No',
                     preStatsSpellFirst: `DAMAGE:`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `12 / 9 / 6 / 3`,
                     manaSpell: `30 / 40 / 50 / 60`,
                     preStatsSpellSecond: `MOVEMENT SLOW:`,
                     preStatsSpellThird: `SLOW DURATION:`,
                     preStatsSpellFourth: `ATTACK RANGE BONUS:`,
                     historySpell: `The Ancient Apparition's eternal knowledge brings a frigid enchantment to his attacks.`,
                  },
               ],
               fourthSpellsDetails: [
                  {
                     nameSpell: `ICE BLAST`,
                     textSpell: `Launches a tracer toward any location on the battlefield, which must be triggered again to mark the area to be blasted by
                      a damaging explosion of hail. The further the tracer travels, the larger the explosion will be. Enemies caught in the explosion, 
                      or who touch the icy ball of hail as it travels, are Frostbitten, taking damage and prevented from regenerating or healing.
                      If a Frostbitten unit's health drops below a certain percentage, they will instantly shatter.`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `Point Target`,
                     secondInfoSpell: `DAMAGE TYPE:`,
                     secondStatsInfoSpell: `Magical`,
                     colorTextSpell: classAbaddonPage.spanAbilityMagical,
                     statsSpellFirst: `250 / 325 / 400`,
                     statsSpellSecond: `10`,
                     statsSpellThird: `12,5 / 20 / 32`,
                     statsSpellFourth: `12% / 13% / 14%`,
                     preImmunitySpell: `PIERCES SPELL IMMUNITY:`,
                     immunitySpell: 'Yes',
                     preDissableSpell: `DISABLE:`,
                     dissableSpell: `No`,
                     historySpell: `Ice storms from ages past flow through Kaldr's frosty limbs, crashing into the world and turning its
                      inhabitants into monuments to his eternal power.`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `60 / 50 / 40`,
                     manaSpell: `175`,
                     preStatsSpellFirst: `DAMAGE:`,
                     preStatsSpellSecond: `FROSTBITTEN DURATION:`,
                     preStatsSpellThird: `FROSTBITTEN DAMAGE PER SECOND:`,
                     preStatsSpellFourth: `SHATTER HEALTH THRESHOLD:`,
                     classFromTextSpell:
                        classAbaddonPage.textSecondAbilityRightFix,
                     classFromSubTextSpell:
                        classAbaddonPage.spanFourthAbilityRightFix,
                  },
               ],
               leftButton: [
                  {
                     namePreviousHero: `ALCHEMIST`,
                     atrPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`,
                     typePreviousHero: `MELEE`,
                     imgPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/alchemist.png`,
                     linkPreviousHero: `/heroes/Alchemist`,
                  },
               ],
               rightButton: [
                  {
                     nameNextHero: `ANTI-MAGE`,
                     atrNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png`,
                     typeNextHero: `MELEE`,
                     imgNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/antimage.png`,
                     linkNextHero: `/heroes/Anti-mage`,
                  },
               ],
               btnArrow: [
                  {
                     leftArrowBtn: classAbaddonPage.btnArrowFixAparat,
                     rightArrowBtn: classAbaddonPage.btnArrowRightFixAparat,
                     centerBtn: classAbaddonPage.buttonCubeFixAparat,
                     linkLeftArrowBtn: `/heroes/Alchemist`,
                     linkRightArrowBtn: `/heroes/Anti-mage`,
                  },
               ],
            },
         ],
      },
   ],
   AntiMagePage: [
      {
         posts: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
               name: 'ANTI-MAGE',
               textAtr: 'AGILITY',
               number: 1,
               subtitle: 'SLASHES HIS FOES WITH MANA-DRAINING ATTACKS',
               type: [
                  {
                     imgType:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg',
                     nameType: 'MELEE',
                  },
               ],
               history: [
                  {
                     firstChapterHistory: `The monks of Turstarkuri watched the 
                     rugged valleys below their mountain monastery as wave after
                      wave of invaders swept through the lower kingdoms. Ascetic 
                      and pragmatic, in their remote monastic eyrie they remained
                     aloof from mundane strife, wrapped in meditation that knew
                      no gods or elements of magic. Then came the Legion of the
                      Dead God, crusaders with a sinister mandate to replace all
                      local worship with their Unliving Lord's poisonous nihilosophy.
                      From a landscape that had known nothing but blood and battle
                      for a thousand years, they tore the souls and bones of countless
                      fallen legions and pitched them against Turstarkuri. The monastery
                      stood scarcely a fortnight against the assault, and the few
                      monks who bothered to surface from their meditations believed
                      the invaders were but demonic visions sent to distract
                      them from meditation. They died where they sat on their 
                      silken cushions. Only one youth survived--a pilgrim who
                      had come as an acolyte, seeking wisdom, but had yet to
                      be admitted to the monastery. He watched in horror as
                      the monks to whom he had served tea and nettles were first 
                      slaughtered, then raised to join the ranks of the Dead God's
                      priesthood. With nothing but a few of Turstarkuri's prized
                     dogmatic scrolls, he crept away to the comparative safety 
                     of other lands, swearing to obliterate not only the Dead God's 
                     magic users--but to put an end to magic altogether.`,
                  },
                  {
                     summaryTextFirst: `Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults.`,
                     summaryTextSecond: `from enemies with every strike or `,
                     summaryTextThird: `to escape an ambush, cornering him is a challenge for any foe.`,
                  },
                  {
                     nameSpellFirst: `Draining mana`,
                     nameSpellSecond: ` teleporting short distances`,
                  },
                  {
                     firstLevel: classAbaddonPage.cubeComplexityFirst,
                     secondLevel: classAbaddonPage.cube,
                     thirdLevel: classAbaddonPage.cube,
                  },
               ],
               video: [
                  {
                     videoHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm`,
                  },
               ],
               stats: [
                  {
                     imgHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png`,
                     health: 538,
                     mana: 219,
                     healthRegeneration: '+2.6',
                     manaRegeneration: '+0.6',
                     strengthAtr: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`,
                     strengthAtrNumber: '19',
                     strengthAtrNumberPlus: '+1.6',
                     agilityAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
                     agilityAtrNumber: '24',
                     agilityAtrNumberPlus: '+2.8',
                     intelligenciAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
                     intelligenciAtrNumber: '12',
                     intelligenciAtrNumberPlus: '+1.8',
                     carryBarConteiner: classAbaddonPage.barConteiner,
                     supportBarConteiner: classAbaddonPage.barConteiner70,
                     durableBarConteiner: classAbaddonPage.barConteiner70,
                     attackLogo:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
                     attackNumber: `53-57`,
                     attackTimeLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png`,
                     attackTimeNumber: `1.4`,
                     attackDistanceLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png`,
                     attackDistanceNumber: `150`,
                     defenseLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png`,
                     defenseNumber: `5.0`,
                     magicResistLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png`,
                     magicResistNumber: `25%`,
                     speedMobilityLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedMobilityNumber: `310`,
                     speedRateLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedRateNumber: `0.6`,
                     visionLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png`,
                     visionNumber: `1800/800`,
                  },
               ],
               videoSpells: [
                  {
                     videoSpellFirst:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_mana_break.webm',
                     videoSpellSecond:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_blink.mp4',
                     videoSpellThird:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_counterspell.mp4',
                     videoSpellFoutrh:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_mana_void.mp4',
                  },
               ],
               spellsImg: [
                  {
                     firstSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png',
                     secondSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png',
                     thirdSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png',
                     fourthSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png',
                  },
               ],
               firstSpellsDetails: [
                  {
                     nameSpell: `MANA BREAK`,
                     textSpell: `Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt.
                      Enemies with no mana left are temporarily slowed.`,
                     firstInfoSpell: `ABILITY:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Passive`,
                     thirdStatsInfoSpell: `Physical`,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     colorTextSpell: classAbaddonPage.spanAbilityPhysical,
                     immunitySpell: 'No',
                     preStatsSpellFirst: `MANA BURNED AS DAMAGE:`,
                     preStatsSpellSecond: `MANA BURNED PER HIT:`,
                     preStatsSpellThird: `MAX MANA BURNED PER HIT:`,
                     preStatsSpellFourth: `MOVE SPEED SLOW ON FULL DRAIN:`,
                     preStatsSpellFifth: `SLOW DURATION:`,
                     statsSpellFirst: '50%',
                     statsSpellSecond: `25 / 30 / 35 / 40`,
                     statsSpellThird: `1,6% / 2,4% / 3,2% / 4%`,
                     statsSpellFourth: `25% / 30% / 35% / 40%`,
                     statsSpellFifth: `0,75`,
                     historySpell: `A modified technique of the Turstarkuri monks' peaceful ways is to turn magical energies on their owner.`,
                  },
               ],
               secondSpellsDetails: [
                  {
                     nameSpell: `BLINK`,
                     textSpell: `Short distance teleportation that allows Anti-Mage to move in and out of combat.`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `Point Target`,
                     statsSpellFirst: `750 / 900 / 1050 / 1200`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `13,5 / 11 / 8,5 / 6`,
                     manaSpell: `45`,
                     historySpell: `In his encounter with the Dead Gods, Anti-Mage learned the value of being elusive.`,
                     preStatsSpellFirst: `RANGE:`,
                     classStatsRight: classAbaddonPage.statsAbilityBottomEmpty,
                  },
               ],
               thirdSpellsDetails: [
                  {
                     nameSpell: `CORROSIVE WEAPONRY`,
                     textSpell: `Alchemist coats his weapons with an acid that applies a
                      stacking slow and status resistance reduction to enemies hit. Slow 
                      and Status resistance increases when Alchemist is under the effect of 
                      Chemical Rage.`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `Passive`,
                     statsSpellFirst: `4.0 / 6.0 / 8.0 / 10.0`,
                     statsSpellSecond: `3.5`,
                     statsSpellThird: `3.0% / 4.0% / 5.0% / 6.0%`,
                     statsSpellFourth: `3.0% / 4.0% / 5.0% / 6.0%`,
                     statsSpellFifth: `1.5%`,
                     preImmunitySpell: `PIERCES SPELL IMMUNITY:`,
                     immunitySpell: 'No',
                     classImunitySpell:
                        classAbaddonPage.spanSecondAbilityRightOneSpell,
                     historySpell: ``,
                     preStatsSpellFirst: `MAX STACKS:`,
                     preStatsSpellSecond: `DEBUFF DURATION:`,
                     preStatsSpellThird: `MOVEMENT SLOW PER STACK:`,
                     preStatsSpellFourth: `STATUS RESISTANCE REDUCTION PER STACK:`,
                     preStatsSpellFifth: `CHEMICAL RAGE BONUS:`,
                  },
               ],
               fourthSpellsDetails: [
                  {
                     nameSpell: `CHEMICAL RAGE`,
                     textSpell: `Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing 
                     movement speed and health regeneration.`,
                     subtextSpell: `DISPEL TYPE: Basic Dispel`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `No Target`,
                     statsSpellFirst: `30.0`,
                     statsSpellSecond: `1.2 / 1.1 / 1.0`,
                     statsSpellThird: `50.0 / 80.0 / 110.0`,
                     statsSpellFourth: `30.0 / 45.0 / 60.0`,
                     statsSpellFifth: `25.0`,
                     statsSpellSixth: `5.0%`,
                     preDissableSpell: `DISABLE:`,
                     dissableSpell: `No`,
                     historySpell: `The brew Razzil gave to the Ogre during their prison bust has 
                     become a useful potion in the midst of combat.`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `60.0`,
                     manaSpell: `50 / 75 / 100`,
                     preStatsSpellFirst: `DURATION:`,
                     preStatsSpellSecond: `BASE ATTACK TIME:`,
                     preStatsSpellThird: `BONUS HEALTH REGEN:`,
                     preStatsSpellFourth: `BONUS MOVE SPEED:`,
                     preStatsSpellFifth: `BONUS DAMAGE PER SCEPTER:`,
                     preStatsSpellSixth: `SPELL AMP PER SCEPTER:`,
                  },
               ],
               leftButton: [
                  {
                     namePreviousHero: `Abaddon`,
                     atrPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png`,
                     typePreviousHero: `MELEE`,
                     imgPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/abaddon.png`,
                     linkPreviousHero: `/heroes/Abaddon`,
                  },
               ],
               rightButton: [
                  {
                     nameNextHero: `ANCIENT`,
                     secondNameNextHero: `APPARITION`,
                     atrNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`,
                     typeNextHero: `RANGED`,
                     imgNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/ancient_apparition.png`,
                     linkNextHero: `/heroes/Ancientapparition`,
                  },
               ],
               btnArrow: [
                  {
                     leftArrowBtn: classAbaddonPage.btnArrowFix,
                     rightArrowBtn: classAbaddonPage.btnArrowRightFix,
                     centerBtn: classAbaddonPage.buttonCubeFix,
                     linkLeftArrowBtn: `/heroes/Abaddon`,
                     linkRightArrowBtn: `/heroes/Ancientapparition`,
                  },
               ],
            },
         ],
      },
   ],
   ArcWardenPage: [
      {
         posts: [
            {
               id: 1,
               imageUrl:
                  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
               name: 'ARC',
               nameSecond: 'WARDEN',
               textAtr: 'AGILITY',
               number: 111,
               subtitle: 'CREATES A COPY OF HIMSELF TO SPLIT PUSH',
               type: [
                  {
                     imgType:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg',
                     nameType: 'RANGED',
                  },
               ],
               history: [
                  {
                     firstChapterHistory: `Before the beginning of all, there existed
                      a presence: a primordial mind, infinite, awesome, and set to 
                      inscrutable purpose. As the universe thundered into being, this
                      mind was fragmented and scattered. Two among its greater 
                      fragments--who would come to be named Radiant and Dire--found 
                      themselves locked in vicious opposition,
                      and began twisting all of creation to serve their conflict.`,
                     secondChapterHistory: `As war and cataclysm threatened the nascent cosmos,
                     the will of a third fragment made itself known. Naming itself Zet, this intellect sought
                     to resolve the disharmony and return all to perfect unity. Appalled by its kin's conflicting
                     nature, Zet gathered the sum of its power. In a sudden flash, it overwhelmed its siblings, 
                     and fused the warring aspects into a stellar sphere before hurling them into the darkness 
                     to orbit a nondescript world. Harmony was restored, though only the barest fraction of Zet's
                     strength remained. Setting its gaze on the prison, Zet chose to use its weakened power
                     to serve as watchful warden until time's end. For uncounted aeons, this vigil stood.`,
                     thirdChapterHistory: `
                     Life flourished upon the world below, oblivious to the dangers imprisoned within the softly
                      glowing moon, or of Zet's struggles to contain them. As the captives' eternal clash reverberated
                     within, the surface of the prison shuddered, over time beginning to crack. Ultimately, Zet's
                      depleted power proved insufficient to contain the breach, and at last the moon was shattered.
                      The prison's ancient inhabitants had escaped to sow their conflict anew.Flung to the farthest
                      reaches by the prison's explosion, Zet was transformed by the dissonant energies of its former
                     captives. No longer of single form and thought, its presence had become split among many--some
                     lesser, some greater--each connected by a fleeting arc of consciousness. Struggling to suppress
                     its own disunity, Zet sped toward the burgeoning conflict of its siblings, bending its 
                     fractured wills toward a singular conclusion: the aspects of the primordial mind must 
                     be made to reunite, or all must be destroyed lest the conflict spread further...`,
                  },
                  {
                     summaryTextFirst: `A splintered fragment of the same primordial power as the Ancients themselves, Zet 
                     the Arc Warden has pledged to see the clash between Radiant and Dire finally end.`,
                     summaryTextSecond: `with fluxing energy, or distort space to generate a`,
                     summaryTextThird: `around allies.`,
                     summaryTextFourth: `to patrol an area for enemies to infuse with harmful magic, then 
                     create a double of Zet, items and all, to overwhelm your foes.`,
                  },
                  {
                     nameSpellFirst: `Assault lone enemies`,
                     nameSpellSecond: ` protective field`,
                     nameSpellThird: ` Summon a Spark Wraith`,
                  },
                  {
                     firstLevel: classAbaddonPage.cubeComplexityFirst,
                     secondLevel: classAbaddonPage.cubeComplexity,
                     thirdLevel: classAbaddonPage.cubeComplexity,
                  },
               ],
               video: [
                  {
                     videoHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/arc_warden.webm`,
                  },
               ],
               stats: [
                  {
                     imgHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png`,
                     health: 604,
                     mana: 363,
                     healthRegeneration: '+2.5',
                     manaRegeneration: '+1.2',
                     strengthAtr: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`,
                     strengthAtrNumber: '22',
                     strengthAtrNumberPlus: '+2.6',
                     agilityAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png',
                     agilityAtrNumber: '20',
                     agilityAtrNumberPlus: '+3.0',
                     intelligenciAtr:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png',
                     intelligenciAtrNumber: '24',
                     intelligenciAtrNumberPlus: '+2.6',
                     carryBarConteiner: classAbaddonPage.barConteiner,
                     supportBarConteiner: classAbaddonPage.barConteiner70,
                     durableBarConteiner: classAbaddonPage.barConteiner70,
                     attackLogo:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png',
                     attackNumber: `51-57`,
                     attackTimeLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png`,
                     attackTimeNumber: `1.7`,
                     attackDistanceLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png`,
                     attackDistanceNumber: `625`,
                     attackSpeedLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png`,
                     attackSpeedNumber: `900`,
                     defenseLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png`,
                     defenseNumber: `3.3`,
                     magicResistLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png`,
                     magicResistNumber: `25%`,
                     speedMobilityLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedMobilityNumber: `285`,
                     speedRateLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png`,
                     speedRateNumber: `0.7`,
                     visionLogo: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png`,
                     visionNumber: `1800/800`,
                  },
               ],
               videoSpells: [
                  {
                     videoSpellFirst:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_flux.mp4',
                     videoSpellSecond:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_magnetic_field.mp4',
                     videoSpellThird:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_spark_wraith.mp4',
                     videoSpellFoutrh:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/arc_warden/arc_warden_tempest_double.mp4',
                  },
               ],
               spellsImg: [
                  {
                     firstSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_flux.png',
                     secondSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_magnetic_field.png',
                     thirdSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_spark_wraith.png',
                     fourthSpell:
                        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/arc_warden_tempest_double.png',
                  },
               ],
               firstSpellsDetails: [
                  {
                     nameSpell: `FLUX`,
                     textSpell: `Infuses a lone enemy unit with swirling, volatile energy, dealing damage over time. 
                     The damage is not applied if another enemy unit is near the target.`,
                     subtextSpell: `Arc Warden: Slows the target's movement speed.`,
                     secondSubtextSpell: `Tempest Double: Movement speed slow is decreased, but damage is increased.`,
                     firstInfoSpell: `ABILITY:`,
                     secondInfoSpell: `AFFECTS:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Unit Target`,
                     secondStatsInfoSpell: `Enemy Units`,
                     thirdStatsInfoSpell: `Magical`,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     colorTextSpell: classAbaddonPage.spanAbilityMagical,
                     immunitySpell: 'No',
                     preStatsSpellFirst: `DURATION:`,
                     preStatsSpellSecond: `DAMAGE PER SECOND:`,
                     preStatsSpellThird: `TEMPEST DAMAGE PER SECOND:`,
                     preStatsSpellFourth: `ALLY SEARCH RADIUS:`,
                     preStatsSpellFifth: `MOVEMENT SPEED SLOW:`,
                     preStatsSpellSixth: `TEMPEST MOVEMENT SPEED SLOW:`,
                     preStatsSpellSeventh: `CAST RANGE:`,
                     statsSpellFirst: '6',
                     statsSpellSecond: `15 / 30 / 45 / 60`,
                     statsSpellThird: `20 / 45 / 70 / 95`,
                     statsSpellFourth: `225`,
                     statsSpellFifth: `14% / 21% / 28% / 35%`,
                     statsSpellSixth: `6% / 10% / 14% / 18%`,
                     statsSpellSeventh: `500 / 600 / 700 / 800`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: ` 22.0 / 21.0 / 20.0 / 19.0`,
                     manaSpell: `120`,
                     historySpell: `Using traditional Alchemy from the Darkbrew family, Razzil concocts an acid that dissolves 
                     even the toughest metals.`,
                     historyStyle: classAbaddonPage.historyFirstSpellBig,
                  },
               ],
               secondSpellsDetails: [
                  {
                     nameSpell: `UNSTABLE CONCOCTION`,
                     textSpell: `Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal 
                     damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. 
                     Alchemist is faster while charging the concoction. After 5.0 seconds, the brew reaches its maximum damage and stun time. 
                     However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown.`,
                     firstInfoSpell: `ABILITY:`,
                     thirdInfoSpell: `DAMAGE TYPE:`,
                     firstStatsInfoSpell: `Unit Target`,
                     thirdStatsInfoSpell: `Physical`,
                     statsSpellFirst: `1.7 / 2.2 / 2.7 / 3.2`,
                     statsSpellSecond: `150.0 / 220.0 / 290.0 / 360.0`,
                     statsSpellThird: `250.0`,
                     statsSpellFourth: `4.0% / 8.0% / 12.0% / 16.0%`,
                     preImunitySpell: `PIERCES SPELL IMMUNITY:`,
                     classTextAbilityRightSecond:
                        classAbaddonPage.abilityStatsRightSecond,
                     immunitySpell: 'No',
                     preDisableSpell: `DISABLE:`,
                     dissableSpell: `Only Strong Dispels`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `15.0`,
                     manaSpell: `100`,
                     historySpell: `A silver lining to the failure of turning a mountain into gold, this volatile solution has destructive potential.`,
                     colorTextSpell: classAbaddonPage.spanAbilityPhysical,
                     preStatsSpellFirst: `MAX STUN:`,
                     preStatsSpellSecond: `MAX DAMAGE:`,
                     preStatsSpellThird: `EXPLOSION RADIUS:`,
                     preStatsSpellFourth: `MOVE SPEED BONUS:`,
                  },
               ],
               thirdSpellsDetails: [
                  {
                     nameSpell: `CORROSIVE WEAPONRY`,
                     textSpell: `Alchemist coats his weapons with an acid that applies a
                      stacking slow and status resistance reduction to enemies hit. Slow 
                      and Status resistance increases when Alchemist is under the effect of 
                      Chemical Rage.`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `Passive`,
                     statsSpellFirst: `4.0 / 6.0 / 8.0 / 10.0`,
                     statsSpellSecond: `3.5`,
                     statsSpellThird: `3.0% / 4.0% / 5.0% / 6.0%`,
                     statsSpellFourth: `3.0% / 4.0% / 5.0% / 6.0%`,
                     statsSpellFifth: `1.5%`,
                     preImmunitySpell: `PIERCES SPELL IMMUNITY:`,
                     immunitySpell: 'No',
                     classImunitySpell:
                        classAbaddonPage.spanSecondAbilityRightOneSpell,
                     historySpell: ``,
                     preStatsSpellFirst: `MAX STACKS:`,
                     preStatsSpellSecond: `DEBUFF DURATION:`,
                     preStatsSpellThird: `MOVEMENT SLOW PER STACK:`,
                     preStatsSpellFourth: `STATUS RESISTANCE REDUCTION PER STACK:`,
                     preStatsSpellFifth: `CHEMICAL RAGE BONUS:`,
                  },
               ],
               fourthSpellsDetails: [
                  {
                     nameSpell: `CHEMICAL RAGE`,
                     textSpell: `Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing 
                     movement speed and health regeneration.`,
                     subtextSpell: `DISPEL TYPE: Basic Dispel`,
                     firstInfoSpell: `ABILITY:`,
                     firstStatsInfoSpell: `No Target`,
                     statsSpellFirst: `30.0`,
                     statsSpellSecond: `1.2 / 1.1 / 1.0`,
                     statsSpellThird: `50.0 / 80.0 / 110.0`,
                     statsSpellFourth: `30.0 / 45.0 / 60.0`,
                     statsSpellFifth: `25.0`,
                     statsSpellSixth: `5.0%`,
                     preDissableSpell: `DISABLE:`,
                     dissableSpell: `No`,
                     historySpell: `The brew Razzil gave to the Ogre during their prison bust has 
                     become a useful potion in the midst of combat.`,
                     timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
                     timeSpell: `60.0`,
                     manaSpell: `50 / 75 / 100`,
                     preStatsSpellFirst: `DURATION:`,
                     preStatsSpellSecond: `BASE ATTACK TIME:`,
                     preStatsSpellThird: `BONUS HEALTH REGEN:`,
                     preStatsSpellFourth: `BONUS MOVE SPEED:`,
                     preStatsSpellFifth: `BONUS DAMAGE PER SCEPTER:`,
                     preStatsSpellSixth: `SPELL AMP PER SCEPTER:`,
                  },
               ],
               leftButton: [
                  {
                     namePreviousHero: `Abaddon`,
                     atrPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png`,
                     typePreviousHero: `MELEE`,
                     imgPreviousHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/abaddon.png`,
                     linkPreviousHero: `/heroes/Abaddon`,
                  },
               ],
               rightButton: [
                  {
                     nameNextHero: `ANCIENT`,
                     secondNameNextHero: `APPARITION`,
                     atrNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`,
                     typeNextHero: `RANGED`,
                     imgNextHero: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/ancient_apparition.png`,
                     linkNextHero: `/heroes/Ancientapparition`,
                  },
               ],
               btnArrow: [
                  {
                     leftArrowBtn: classAbaddonPage.btnArrowFix,
                     rightArrowBtn: classAbaddonPage.btnArrowRightFix,
                     centerBtn: classAbaddonPage.buttonCubeFix,
                     linkLeftArrowBtn: `/heroes/Abaddon`,
                     linkRightArrowBtn: `/heroes/Ancientapparition`,
                  },
               ],
            },
         ],
      },
   ],
};

export default state;
