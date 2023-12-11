import classAbaddonPage from '../components/Pages/PagesInfoHeroes/AbaddonPage/AbaddonPage.module.css';

const state = {
   AbadonePage: [
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
         ],
         type: [
            {
               imgType:
                  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg',
               nameType: 'MELEE',
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
               targetSpell: `Unit Target`,
               affectsSpell: `Heroes`,
               damageTypeSpell: `Magical`,
               immunitySpell: 'Allies Yes Enemies No',
               selfDamageSpell: '40.0%',
               DamageOrHealSpell: `100.0 / 175.0 / 250.0 / 325.0`,
               rangeSpell: `600.0 / 625.0 / 650.0 / 675.0`,
               timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
               timeSpell: ` 6.5 / 6.0 / 5.5 / 5.0`,
               manaSpell: `50`,
               historySpell: `A mysterious vapor from the Font of Avernus now infuses the
       breath of Abaddon, who releases it at will.`,
            },
         ],
         secondSpellsDetails: [
            {
               nameSpell: `APHOTIC SHIELD`,
               textSpell: `Summons dark energies around an ally unit, creating an all
         damage barrier that absorbs a set amount of damage before
         expiring. When the barrier is destroyed it will burst and deal
         damage equal to the amount it could absorb to an area around
         it. Removes certain types of negative buffs and stuns on cast.`,
               subtextSpell: `DISPEL TYPE: Strong Dispel`,
               targetSpell: `Unit Target`,
               affectsSpell: `Allied Units`,
               damageTypeSpell: `Magical`,
               durationSpell: `15.0`,
               burstRadiusSpell: `675.0`,
               barrierSpell: `120.0 / 150.0 / 180.0 / 210.0`,
               immunitySpell: 'No',
               dissableSpell: `Yes`,
               timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
               timeSpell: `12.0 / 10.0 / 8.0 / 6.0`,
               manaSpell: `95 / 110 / 125 / 140`,
               historySpell: `The powers of the black mist rise to absorb attacks like the black mist absorbs light.`,
            },
         ],
         thirdSpellsDetails: [
            {
               nameSpell: `CURSE OF AVERNUS`,
               textSpell: `Abaddon strikes an enemy, slowing the target's movement speed. If the target gets hit 4.0 times, they become affected
          by a chilling curse causing them to be silenced and slowed, and all attacks against them gain an attack speed boost.`,
               abilitySpell: `Passive`,
               durationSpell: `5.0`,
               basicSlowSpell: `10.0% / 15.0% / 20.0% / 25.0%`,
               curseDurationSpell: `4.5`,
               curseSlowSpell: `15.0% / 30.0% / 45.0% / 60.0%`,
               curseAttackSpeedSpell: `60.0 / 80.0 / 100.0 / 120.0`,
               immunitySpell: 'No',
               dissableSpell: `Yes`,
               historySpell: `While the baptized draw strength from the Font, the gifts of Avernus are debilitating to the uninitiated.`,
            },
         ],
         fourthSpellsDetails: [
            {
               nameSpell: `BORROWED TIME`,
               textSpell: `When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed.
          If the ability is not on cooldown, it will automatically activate if your health falls below 400.0.`,
               subtextSpell: `DISPEL TYPE: Strong Dispel`,
               abilitySpell: `No Target`,
               healthSpell: `400.0`,
               durationSpell: `4.0 / 5.0 / 6.0`,
               secondDurationSpell: `7.0 / 8.0 / 9.0`,
               damageSpell: `525.0`,
               rangeSpell: `1200.0`,
               dissableSpell: `No`,
               historySpell: `The most unnatural of all the gifts of the Font of Avernus, this power defies mortal understanding. 
         What should hurt, instead heals; and what should kill gives strength anew.`,
               timeLogoSpell: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png`,
               timeSpell: `70.0 / 60.0 / 50.0`,
               manaSpell: `0 / 0 / 0`,
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
                  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png',
               name: 'Alchemist',
               textAtr: 'Strength',
               number: 101,
               subtitle: 'Alchemist its cooll',
            },
         ],
      },
   ],
};

export default state;
