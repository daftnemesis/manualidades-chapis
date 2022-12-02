import React, { useState } from 'react'

export const ImageSlider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevButton = () => {
    currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(currentIndex - 1)
  }

  const nextButton = () => {
    currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }

  const selectSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
      <div className='w-full h-full relative lg:w-3/6 mx-auto'>
        <div className='absolute top-2/4 left-2 cursor-pointer' onClick={prevButton}><svg className='w-10 fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></div>
        <div className='absolute top-2/4 right-2 cursor-pointer' onClick={nextButton}><svg className='w-10 fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>
        <div className='h-full w-full rounded-lg bg-cover bg-center' style={{backgroundImage: `url('${slides[currentIndex].url}')`}} ></div>
        <div className='flex gap-3 mt-4 justify-center'>
          {
            slides.map((slide, index) => {
              return (<div key={index} className='cursor-pointer' onClick={() => selectSlide(index)} ><svg className='w-6 fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg></div>)
            })
          }
        </div>
      </div>
  )
}

