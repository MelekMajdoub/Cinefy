import React from 'react'
import Navbar from './Navbar'
import Footer from "../components/Footer"
import '../styles/Home.css'
import MainScreen from './MainScreen'
import FilmList from './FilmList'


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <MainScreen/>
        <FilmList/>
        <Footer/>
    </div>
  )
}

export default Home