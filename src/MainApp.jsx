import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'

export const MainApp = () => {
  return (

    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

  )

}