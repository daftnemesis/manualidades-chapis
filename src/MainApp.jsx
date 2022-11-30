import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { NavBar } from './ui/NavBar'

export const MainApp = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>

  )

}