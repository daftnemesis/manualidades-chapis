import React, { useState } from 'react'

export const ImageSlider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevButton = () => {
    currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(currentIndex - 1)
  }

  const nextButton = () => {
    currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }

  return (
      <div className='w-full h-full relative lg:w-3/6 mx-auto'>
        <div className='text-9xl text-yellow-300 absolute top-1/3 left-2 cursor-pointer' onClick={prevButton} >&#129168;</div>
        <div className='text-9xl text-yellow-300 absolute top-1/3 right-2 cursor-pointer' onClick={nextButton}>&#129170;</div>
        <div className={`h-full bg-[url("${slides[currentIndex].url}")] rounded-lg bg-cover bg-center `}></div>
      </div>
  )
}
// ${slides[currentIndex].url}

