import React from 'react';
import { Link } from 'react-router-dom';

import HeroesText from './HeroesComponent/HeroesText';
import HeroesInput from './HeroesComponent/HeroesFilterInput';
import Abaddon from './HeroesButtonns/Abaddon';
import Alchimist from './HeroesButtonns/Alchemist';
import AncientApparation from './HeroesButtonns/AncientApparation';
import AntiMage from './HeroesButtonns/AntiMage';
import ArcWarden from './HeroesButtonns/ArcWarden';
import Axe from './HeroesButtonns/Axe';
import Bane from './HeroesButtonns/Bane';
import Batrider from './HeroesButtonns/Batrider';
import BeastMaster from './HeroesButtonns/BeastMaster';
import Bloodseeker from './HeroesButtonns/Bloodseeker';
import BountyHunter from './HeroesButtonns/BountyHunter';
import BrewMaster from './HeroesButtonns/BrewMaster';
import BristleBack from './HeroesButtonns/BristleBack';
import BroodMother from './HeroesButtonns/BroodMother';
import CentaurWarrunner from './HeroesButtonns/CentaurWarrunner';
import ChaosNight from './HeroesButtonns/ChaosNight';
import Chen from './HeroesButtonns/Chen';
import Clinkz from './HeroesButtonns/Clinkz';
import Clockwerk from './HeroesButtonns/Clockwerk';
import CrystalMaiden from './HeroesButtonns/CrystalMaiden';
import DarkSeer from './HeroesButtonns/DarkSeer';
import DarkWillow from './HeroesButtonns/DarkWillow';
import DawnBreaker from './HeroesButtonns/DawnBreaker';
import Dazzle from './HeroesButtonns/Dazzle';
import DeathProphet from './HeroesButtonns/DeathProphet';
import Disruptor from './HeroesButtonns/Disruptor';
import Doom from './HeroesButtonns/Doom';
import DragonNight from './HeroesButtonns/DragonNight';
import DrowRanger from './HeroesButtonns/DrowRanger';
import EarthSpirit from './HeroesButtonns/EarthSpirit';
import EarthShaker from './HeroesButtonns/EarthShaker';
import ElderTitan from './HeroesButtonns/ElderTitan';
import EmberSpirit from './HeroesButtonns/EmberSpirit';
import Enchantress from './HeroesButtonns/Enchantress';
import Enigma from './HeroesButtonns/Enigma';
import FacelessVoid from './HeroesButtonns/FacelessVoid';
import Grimstroke from './HeroesButtonns/Grimstroke';
import Gyrocopter from './HeroesButtonns/Gyrocopter';
import Hoodwink from './HeroesButtonns/Hoodwink';
import Huskar from './HeroesButtonns/Huskar';
import Invoker from './HeroesButtonns/Invoker';
import Io from './HeroesButtonns/io';
import Jakiro from './HeroesButtonns/Jakiro';
import Juggernaut from './HeroesButtonns/Juggernaut';
import KeeperOfTheLight from './HeroesButtonns/KeeperOfTheLight';
import Kunkka from './HeroesButtonns/Kunkka';
import LegionCommander from './HeroesButtonns/LegionCommander';
import Leshrac from './HeroesButtonns/Leshrac';
import Lich from './HeroesButtonns/Lich';
import LifeStealer from './HeroesButtonns/Lifestealer';
import Lina from './HeroesButtonns/Lina';
import Lion from './HeroesButtonns/Lion';
import LoneDruid from './HeroesButtonns/LoneDruid';
import Luna from './HeroesButtonns/Luna';
import Lycan from './HeroesButtonns/Lycan';
import Magnus from './HeroesButtonns/Magnus';
import Marci from './HeroesButtonns/Marci';
import Mars from './HeroesButtonns/Mars';
import Medusa from './HeroesButtonns/Medusa';
import Meepo from './HeroesButtonns/Meepo';
import Mirana from './HeroesButtonns/Mirana';
import MonkeyKing from './HeroesButtonns/MonkeyKing';
import Morphling from './HeroesButtonns/Morphling';
import Muerta from './HeroesButtonns/Muerta';
import NagaSiren from './HeroesButtonns/NagaSiren';
import NaturesProphet from './HeroesButtonns/NaturesProphet';
import Necrophos from './HeroesButtonns/Necrophos';
import NightStalker from './HeroesButtonns/NightStalker';
import NyxAssassin from './HeroesButtonns/NyxAssassin';
import OgreMagi from './HeroesButtonns/OgreMagi';
import Omniknight from './HeroesButtonns/Omniknight';
import Oracle from './HeroesButtonns/Oracle';
import OutworldDestroyer from './HeroesButtonns/OutworldDestroyer';
import Pangolier from './HeroesButtonns/Pangolier';
import PhantomAssassin from './HeroesButtonns/PhantomAssassin';

import classHeroes from './Heroes.module.css';
import PhantomLancer from './HeroesButtonns/PhantomLancer';
import Phoenix from './HeroesButtonns/Phoenix';
import PrimalBeast from './HeroesButtonns/PrimalBeast';
import Puck from './HeroesButtonns/Puck';
import Pudge from './HeroesButtonns/Pudge';
import Pugna from './HeroesButtonns/Pugna';
import QueenOfPain from './HeroesButtonns/QueenOfPain';
import Razor from './HeroesButtonns/Razor';
import Riki from './HeroesButtonns/Riki';
import Rubick from './HeroesButtonns/Rubick';
import SandKing from './HeroesButtonns/SandKing';
import ShadowDemon from './HeroesButtonns/ShadowDemon';
import ShadowFiend from './HeroesButtonns/ShadowFiend';
import ShadowShaman from './HeroesButtonns/ShadowShaman';
import Silencer from './HeroesButtonns/Silencer';
import SkywrathMage from './HeroesButtonns/SkywrathMage';
import Slardar from './HeroesButtonns/Slardar';
import Slark from './HeroesButtonns/Slark';
import Snapfire from './HeroesButtonns/Snapfire';
import Sniper from './HeroesButtonns/Sniper';
import Spectre from './HeroesButtonns/Spectre';
import SpiritBreaker from './HeroesButtonns/SpiritBreaker';
import StormSpirit from './HeroesButtonns/StormSpirit';
import Sven from './HeroesButtonns/Sven';
import Techies from './HeroesButtonns/Techies';
import TemplarAssassin from './HeroesButtonns/TemplarAssassin';
import Terrorblade from './HeroesButtonns/TerrorBlade';
import Tidehunter from './HeroesButtonns/Tidehunter';
import Timbersaw from './HeroesButtonns/TimberSaw';
import Tinker from './HeroesButtonns/Tinker';
import Tiny from './HeroesButtonns/Tiny';
import TreantProtector from './HeroesButtonns/TreantProtector';
import TrollWarlord from './HeroesButtonns/TrollWarlord';
import Tusk from './HeroesButtonns/Tusk';
import Underlord from './HeroesButtonns/Underlord';
import Undying from './HeroesButtonns/Undying';
import Ursa from './HeroesButtonns/Ursa';
import VengerfulSpirit from './HeroesButtonns/VengerfulSpirit';
import Venomancer from './HeroesButtonns/Venomancer';
import Viper from './HeroesButtonns/Viper';
import Visage from './HeroesButtonns/Visage';
import VoidSpirit from './HeroesButtonns/VoidSpirit';
import Warlock from './HeroesButtonns/Warlock';
import Weaver from './HeroesButtonns/Weaver';
import Windranger from './HeroesButtonns/Windranger';
import WinterWyvern from './HeroesButtonns/WinterWyvern';
import WitchDoctor from './HeroesButtonns/WitchDoctor';
import WraithKing from './HeroesButtonns/WraithKing';
import Zeus from './HeroesButtonns/Zeus';

const Heroes = () => {
   return (
      <div className={classHeroes.page}>
         <HeroesText />
         <HeroesInput />
         <div className={classHeroes.container}>
            <Link to="/heroes/Abaddon">
               <Abaddon />
            </Link>
            <Link to="/heroes/Alchemist">
               <Alchimist />
            </Link>
            <Link to="/heroes/Ancientapparition">
               <AncientApparation />
            </Link>
            <Link to="/heroes/Anti-mage">
               <AntiMage />
            </Link>
            <Link to="/heroes/Arcwarden">
               <ArcWarden />
            </Link>
            <Link to="/heroes/Axe">
               <Axe />
            </Link>
            <Link to="/heroes/Bane">
               <Bane />
            </Link>
            <Link to="/heroes/Batrider">
               <Batrider />
            </Link>
            <Link to="/heroes/BeastMaster">
               <BeastMaster />
            </Link>
            <Link to="/heroes/Bloodseeker">
               <Bloodseeker />
            </Link>
            <Link to="/heroes/BountyHunter">
               <BountyHunter />
            </Link>
            <Link to="/heroes/BrewMaster">
               <BrewMaster />
            </Link>
            <Link to="/heroes/BristleBack">
               <BristleBack />
            </Link>
            <Link to="/heroes/BroodMother">
               <BroodMother />
            </Link>
            <Link to="/heroes/CentaurWarrunner">
               <CentaurWarrunner />
            </Link>
            <Link to="/heroes/ChaosNight">
               <ChaosNight />
            </Link>
            <Link to="/heroes/Chen">
               <Chen />
            </Link>
            <Link to="/heroes/Clinkz">
               <Clinkz />
            </Link>
            <Link to="/heroes/Clockwerk">
               <Clockwerk />
            </Link>
            <Link to="/heroes/CrystalMaiden">
               <CrystalMaiden />
            </Link>
            <Link to="/heroes/DarkSeer">
               <DarkSeer />
            </Link>
            <Link to="/heroes/DarkWillow">
               <DarkWillow />
            </Link>
            <Link to="/heroes/DawnBreaker">
               <DawnBreaker />
            </Link>
            <Link to="/heroes/Dazzle">
               <Dazzle />
            </Link>
            <Link to="/heroes/DeathProphet">
               <DeathProphet />
            </Link>
            <Link to="/heroes/Disruptor">
               <Disruptor />
            </Link>
            <Link to="/heroes/Doom">
               <Doom />
            </Link>
            <Link to="/heroes/DragonNight">
               <DragonNight />
            </Link>
            <Link to="/heroes/DrowRanger">
               <DrowRanger />
            </Link>
            <Link to="/heroes/EarthSprit">
               <EarthSpirit />
            </Link>
            <Link to="/heroes/EarthShaker">
               <EarthShaker />
            </Link>
            <Link to="/heroes/ElderTitan">
               <ElderTitan />
            </Link>

            <Link to="/heroes/EmberSpirit">
               <EmberSpirit />
            </Link>
            <Link to="/heroes/Enchantress">
               <Enchantress />
            </Link>
            <Link to="/heroes/Enigma">
               <Enigma />
            </Link>
            <Link to="/heroes/FacelessVoid">
               <FacelessVoid />
            </Link>
            <Link to="/heroes/Grimstroke">
               <Grimstroke />
            </Link>
            <Link to="/heroes/Gyrocopter">
               <Gyrocopter />
            </Link>
            <Link to="/heroes/Hoodwink">
               <Hoodwink />
            </Link>
            <Link to="/heroes/Huskar">
               <Huskar />
            </Link>
            <Link to="/heroes/Invoker">
               <Invoker />
            </Link>
            <Link to="/heroes/Io">
               <Io />
            </Link>
            <Link to="/heroes/Jakiro">
               <Jakiro />
            </Link>
            <Link to="/heroes/Juggernaut">
               <Juggernaut />
            </Link>
            <Link to="/heroes/KeeperOfTheLight">
               <KeeperOfTheLight />
            </Link>
            <Link to="/heroes/Kunkka">
               <Kunkka />
            </Link>
            <Link to="/heroes/LegionCommander">
               <LegionCommander />
            </Link>
            <Link to="/heroes/Leshrac">
               <Leshrac />
            </Link>
            <Link to="/heroes/Lich">
               <Lich />
            </Link>
            <Link to="/heroes/LifeStealer">
               <LifeStealer />
            </Link>
            <Link to="/heroes/Lina">
               <Lina />
            </Link>
            <Link to="/heroes/Lion">
               <Lion />
            </Link>
            <Link to="/heroes/LoneDruid">
               <LoneDruid />
            </Link>
            <Link to="/heroes/Luna">
               <Luna />
            </Link>
            <Link to="/heroes/Lycan">
               <Lycan />
            </Link>
            <Link to="/heroes/Magnus">
               <Magnus />
            </Link>
            <Link to="/heroes/Marci">
               <Marci />
            </Link>
            <Link to="/heroes/Mars">
               <Mars />
            </Link>
            <Link to="/heroes/Medusa">
               <Medusa />
            </Link>
            <Link to="/heroes/Meepo">
               <Meepo />
            </Link>
            <Link to="/heroes/Mirana">
               <Mirana />
            </Link>
            <Link to="/heroes/MonkeyKing">
               <MonkeyKing />
            </Link>
            <Link to="/heroes/Morphling">
               <Morphling />
            </Link>
            <Link to="/heroes/Muerta">
               <Muerta />
            </Link>
            <Link to="/heroes/NagaSiren">
               <NagaSiren />
            </Link>
            <Link to="/heroes/NaturesProphet">
               <NaturesProphet />
            </Link>
            <Link to="/heroes/Necrophos">
               <Necrophos />
            </Link>
            <Link to="/heroes/NightStalker">
               <NightStalker />
            </Link>
            <Link to="/heroes/NyxAssassin">
               <NyxAssassin />
            </Link>
            <Link to="/heroes/OgreMagi">
               <OgreMagi />
            </Link>
            <Link to="/heroes/Omniknight">
               <Omniknight />
            </Link>
            <Link to="/heroes/Oracle">
               <Oracle />
            </Link>
            <Link to="/heroes/OutworldDestroyer">
               <OutworldDestroyer />
            </Link>
            <Link to="/heroes/Pangolier">
               <Pangolier />
            </Link>
            <Link to="/heroes/PhantomAssassin">
               <PhantomAssassin />
            </Link>
            <Link to="/heroes/PhantomLancer">
               <PhantomLancer />
            </Link>
            <Link to="/heroes/Phoenix">
               <Phoenix />
            </Link>
            <Link to="/heroes/PrimalBeast">
               <PrimalBeast />
            </Link>
            <Link to="/heroes/Puck">
               <Puck />
            </Link>
            <Link to="/heroes/Pudge">
               <Pudge />
            </Link>
            <Link to="/heroes/Pugna">
               <Pugna />
            </Link>
            <Link to="/heroes/QueenOfPain">
               <QueenOfPain />
            </Link>
            <Link to="/heroes/Razor">
               <Razor />
            </Link>
            <Link to="/heroes/Riki">
               <Riki />
            </Link>
            <Link to="/heroes/Rubick">
               <Rubick />
            </Link>
            <Link to="/heroes/SandKing">
               <SandKing />
            </Link>
            <Link to="/heroes/ShadowDemon">
               <ShadowDemon />
            </Link>
            <Link to="/heroes/ShadowFiend">
               <ShadowFiend />
            </Link>
            <Link to="/heroes/ShadowShaman">
               <ShadowShaman />
            </Link>
            <Link to="/heroes/Silencer">
               <Silencer />
            </Link>
            <Link to="/heroes/SkywrathMage">
               <SkywrathMage />
            </Link>
            <Link to="/heroes/Slardar">
               <Slardar />
            </Link>
            <Link to="/heroes/Slark">
               <Slark />
            </Link>
            <Link to="/heroes/Snapfire">
               <Snapfire />
            </Link>
            <Link to="/heroes/Sniper">
               <Sniper />
            </Link>
            <Link to="/heroes/Spectre">
               <Spectre />
            </Link>
            <Link to="/heroes/SpiritBreaker">
               <SpiritBreaker />
            </Link>
            <Link to="/heroes/StormSpirit">
               <StormSpirit />
            </Link>
            <Link to="/heroes/Sven">
               <Sven />
            </Link>
            <Link to="/heroes/Techies">
               <Techies />
            </Link>
            <Link to="/heroes/TemplarAssassin">
               <TemplarAssassin />
            </Link>
            <Link to="/heroes/Terrorblade">
               <Terrorblade />
            </Link>
            <Link to="/heroes/Tidehunter">
               <Tidehunter />
            </Link>
            <Link to="/heroes/Timbersaw">
               <Timbersaw />
            </Link>
            <Link to="/heroes/Tinker">
               <Tinker />
            </Link>
            <Link to="/heroes/Tiny">
               <Tiny />
            </Link>
            <Link to="/heroes/TreantProtector">
               <TreantProtector />
            </Link>
            <Link to="/heroes/TrollWarlord">
               <TrollWarlord />
            </Link>
            <Link to="/heroes/Tusk">
               <Tusk />
            </Link>
            <Link to="/heroes/Underlord">
               <Underlord />
            </Link>
            <Link to="/heroes/Undying">
               <Undying />
            </Link>
            <Link to="/heroes/Ursa">
               <Ursa />
            </Link>
            <Link to="/heroes/VengerfulSpirit">
               <VengerfulSpirit />
            </Link>
            <Link to="/heroes/Venomancer">
               <Venomancer />
            </Link>
            <Link to="/heroes/Viper">
               <Viper />
            </Link>

            <Link to="/heroes/Visage">
               <Visage />
            </Link>
            <Link to="/heroes/VoidSpirit">
               <VoidSpirit />
            </Link>
            <Link to="/heroes/Warlock">
               <Warlock />
            </Link>
            <Link to="/heroes/Weaver">
               <Weaver />
            </Link>
            <Link to="/heroes/Winranger">
               <Windranger />
            </Link>
            <Link to="/heroes/WinterWyvern">
               <WinterWyvern />
            </Link>
            <Link to="/heroes/WitchDoctor">
               <WitchDoctor />
            </Link>
            <Link to="/heroes/WraithKing">
               <WraithKing />
            </Link>
            <Link to="/heroes/Zeus">
               <Zeus />
            </Link>
         </div>
      </div>
   );
};

export default Heroes;
