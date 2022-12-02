import React, { useEffect, useState } from 'react'

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

  const nextSlide = () => {
    if(currentIndex === slides.length - 1) {
      setCurrentIndex(0)
    }else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  let intervarId

  useEffect(() => {
    intervarId = setInterval(() => {
      nextSlide()
    }, 5000);
  
    return () => {
      clearInterval(intervarId)
    }
  }, )
  
  
  return (
      <div className='w-full h-full relative lg:w-3/6 mx-auto'>
        <div className='absolute top-2/4 left-2 cursor-pointer z-10' onClick={prevButton}><svg className='w-10 fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></div>
        <div className='absolute top-2/4 right-2 cursor-pointer z-10' onClick={nextButton}><svg className='w-10 fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>
        <div className='animate__animated animate__fadeIn h-full w-full rounded-lg bg-cover bg-center' style={{backgroundImage: `url('${slides[currentIndex].url}')`}} ></div>
        <div className='flex gap-3 mt-4 justify-center'>
          {
            slides.map((slide, index) => {
              return (
              <div key={index} className='cursor-pointer' onClick={() => selectSlide(index)}>
                {
                  currentIndex === index 
                    ? 
                      <svg className='w-8 fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>
                    :
                      <svg className='w-8 fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
                }
              </div>)
            })
          }
        </div>
        
      </div>
  )
}

