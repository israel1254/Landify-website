import { useState } from 'react'
import React from 'react'
import './App.css'
import HomePage from './peges/homePages/HomePage'
import ResponsiveAppBar from './components/header/Nevbar'


const App = () => {
  return (
    <div className='app'>
         <ResponsiveAppBar />
      <HomePage/>
      
    
    </div>
    
  )
}

export default App
