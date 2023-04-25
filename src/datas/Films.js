
import ArabBluesPoster from'../assets/Posters/ArabBluesPoster.webp'
import BabElFellaPoster from'../assets/Posters/BabElFellaPoster.webp'
import BrotherhoodPoster from'../assets/Posters/BrotherhoodPoster.webp'
import CursedBethePhosphatePoster from'../assets/Posters/CursedBethePhosphatePoster.webp'
import ElGortPoster from'../assets/Posters/ElGortPoster.webp'
import EllesPoster from'../assets/Posters/EllesPoster.webp'
import LeftRightPoster from'../assets/Posters/LeftRightPoster.webp'
import LesEpouvantailsPoster from'../assets/Posters/LesEpouvantailsPoster.webp'
import MyShoesPoster from'../assets/Posters/MyShoesPoster.webp'
import TheManBehindtheMicrophonePoster from'../assets/Posters/TheManBehindtheMicrophonePoster.webp'
import ThursdayEveningPoster from'../assets/Posters/ThursdayEveningPoster.webp'
import SairPoster from'../assets/Posters/SairPoster.webp'

import ArabBluesCap from '../assets/Captures/ArabBluesCap.webp'
import BabElFellaCap from '../assets/Captures/BabElFellaCap.webp'
import BrotherhoodCap from '../assets/Captures/BrotherhoodCap.webp'
import CursedBethePhosphateCap from '../assets/Captures/CursedBethePhosphateCap.webp'
import ElGortCap from '../assets/Captures/ElGortCap.webp'
import EllesCap from '../assets/Captures/EllesCap.webp'
import LeftRightCap from '../assets/Captures/LeftRightCap.webp'
import LesEpouvantailsCap from '../assets/Captures/LesEpouvantailsCap.webp'
import MyShoesCap from '../assets/Captures/MyShoesCap.webp'
import SairCap from '../assets/Captures/SairCap.webp'
import TheManBehindtheMicrophoneCap from '../assets/Captures/TheManBehindtheMicrophoneCap.webp'
import ThursdayEveningCap from '../assets/Captures/ThursdayEveningCap.webp'

export const Films = [
	{
        //Short
		name: 'Saiir',
		category: 'Short',
		id: '1ed',
		year: 2022,
		duration: '30min',
		Director: 'Melek Majdoub',
		Cap: SairCap,
        Pster: SairPoster
	},
    {
		name: 'Brotherhood',
		category: 'Short',
		id: '2ed',
		year: 2018,
		duration: '25min',
		Director: 'Meryam Joobeur',
		Cap: BrotherhoodCap,
        Pster: BrotherhoodPoster

	},
    {
        name: 'Left right',
        category: 'Short',
        id: '3ed',
        year: 2018,
        duration: '25min',
        Director: 'Moutii Dridi',
        Cap: LeftRightCap,
        Pster:LeftRightPoster
    },
    {
        name: 'My Shoes',
        category: 'Short',
        id: '4ed',
        year: 2012,
        duration: '30min',
        Director: 'Anis Lassoued',
        Cap: MyShoesCap,
        Pster: MyShoesPoster
    },
    //Long
    {
        name: 'Arab Blues',
        category: 'Long',
        id: '5ed',
        year: 2019,
        duration: '88min',
        Director: 'Manele Labidi',
        Cap: ArabBluesCap,
        Pster: ArabBluesPoster
    },
    {
        name: 'Les épouvantails',
        category: 'Long',
        id: '6ed',
        year: 2019,
        duration: '98min',
        Director: 'Nouri Bouzid',
        Cap: LesEpouvantailsCap,
        Pster: LesEpouvantailsPoster
    },
    {
        name: 'Thursday Evening',
        category: 'Long',
        id: '7ed',
        year: 2012,
        duration: '97min',
        Director: 'Mohamed Damak',
        Cap: ThursdayEveningCap,
        Pster: ThursdayEveningPoster
    },
    {
        name: 'Bab El Fella',
        category: 'Long',
        id: '8ed',
        year: 2014,
        duration: '123min',
        Director: 'Moslah Kraïem',
        Cap: BabElFellaCap,
        Pster:BabElFellaPoster
    },
    //Documentaries
    {
        name: 'Elles',
        category: 'Documentary',
        id: '9ed',
        year: 2018,
        duration: '26min',
        Director: 'Anis Absi',
        Cap: EllesCap,
        Pster: EllesPoster
    },
    {
        name: 'The Man Behind the Microphone',
        category: 'Documentary',
        id: '10ed',
        year: 2017,
        duration: '90min',
        Director: 'Claire Belhassine',
        Cap: TheManBehindtheMicrophoneCap,
        Pster: TheManBehindtheMicrophonePoster
    },
    {
        name: 'El Gort',
        category: 'Documentary',
        id: '11ed',
        year: 2013,
        duration: '87min',
        Director: 'Hamza El Ouni',
        Cap: ElGortCap,
        Pster: ElGortPoster
    },
    {
        name: 'Cursed Be the Phosphate',
        category: 'Documentary',
        id: '12ed',
        year: 2012,
        duration: '82min',
        Director: 'Sami Tlili',
        Cap: CursedBethePhosphateCap,
        Pster: CursedBethePhosphatePoster
    },
]