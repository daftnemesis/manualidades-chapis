import React from 'react'
import { ImageSlider } from '../../ui/slider/ImageSlider'
import slides from '../../ui/slider/slides'


export const HomePage = () => {

  return (

      <div>
        <div className='w-full h-96 mt-2 mb-16'>
          <ImageSlider slides={slides} />
        </div>

        <div className='flex items-center h-96' style={{backgroundImage: "url('https://i.ibb.co/yn4y8tp/arts-arts-and-crafts-bloom-blooming-wallpaper-preview.jpg')"}} >
          <div className='bg-orange-300 h-2/3 flex flex-col justify-center mx-4 rounded-xl px-4 '>
            <h1 className='text-3xl text-center '>Bienvenidos a Manualidades Chapis</h1>
            <p className='text-lg text-center'>Donde encontraras todo lo que buscas para tus eventos, desde pinatas, arreglos, adornos, pasteles, cupcakes, gelatinas, y mucho mucho mas!!!</p>
          </div>
        </div>
      </div>

  )
}
