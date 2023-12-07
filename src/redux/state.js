import classAbaddonPage from '../components/Pages/PagesInfoHeroes/AbaddonPage/AbaddonPage.module.css';

const state = {
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
};

export default state;
