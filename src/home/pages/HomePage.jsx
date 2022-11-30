import React from 'react'
import { ImageSlider } from '../../ui/slider/ImageSlider'
import slides from '../../ui/slider/slides'


export const HomePage = () => {

  return (

      <div className='w-full h-96 mt-2' >
        <ImageSlider slides={slides} />
      </div>

  )
}
