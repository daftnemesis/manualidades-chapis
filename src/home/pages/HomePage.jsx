import React from 'react'
import { ImageSlider } from '../../ui/slider/ImageSlider'
import slides from '../../ui/slider/slides'


export const HomePage = () => {

  return (

      <div>
        <div className='w-full h-96 mt-2 mb-16'>
          <ImageSlider slides={slides} />
        </div>
        <h1 className='text-3xl text-center '>Bienvenidos a Manualidades Chapis</h1>
      </div>

  )
}
