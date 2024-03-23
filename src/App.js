import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginpage from './components/loginpage/Loginpage'
import Customers from './components/customerlist/Customers'
import Billgenerator from './components/billgenerator/Billgenerator'
import Header from './components/Header/Header'




const App = () => {
  return (
    <>
      <BrowserRouter>
       
       <Header/>
       <Routes>       
        <Route path = '/'  element = {<Loginpage/>}/>
        <Route path = '/custom'  element = {<Customers/>}/>
        <Route path = '/bill'  element = {<Billgenerator/>}/>
       
        
       
       </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
