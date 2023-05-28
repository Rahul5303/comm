import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../Pages/SingleProduct'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'

import Checkout from '../Pages/Checkout'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/order" element={<Order/>}/> */}
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
