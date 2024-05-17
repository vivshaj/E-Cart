import React from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WishList from './Pages/WishList'
import Cart from './Pages/Cart'

function App() {

  return (
    <>  
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>  
    </>
  )
}

export default App
