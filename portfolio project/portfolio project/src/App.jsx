import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  
  return (
    <>
      <Header/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
