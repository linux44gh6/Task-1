import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Care from './Components/Care/Care'
import Solution from './Components/Solution/Solution'
import Improve from './Components/ImproveHelth/Improve'
import Review from './Components/Review/Review'
import FAQ from './Components/FAQ/FAQ'
import Discount from './Components/Discount/Discount'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className=' bg-gradient-to-t from-color1 via-color3 to-color2 '>
      <div className=' px-1 md:px-9 lg:px-10'>
      <NavBar></NavBar>
      <Banner></Banner>
      <Care></Care>
      <Solution></Solution>
      <Improve></Improve>
      <Review></Review>
      <FAQ></FAQ>
      <Discount></Discount>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
