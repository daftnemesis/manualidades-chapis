import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../home/pages/HomePage'
import { ProductPage } from '../products/pages/ProductPage'

export const AppRouter = () => {
  return (
    <Routes>

      <Route path='/' element={ <HomePage /> } />
      <Route path='/products' element={ <ProductPage /> } />

    </Routes> 
  )
}
