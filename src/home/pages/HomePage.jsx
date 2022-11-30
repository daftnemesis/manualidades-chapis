import React from 'react'
import AwesomeSlider from 'react-awesome-slider';


export const HomePage = () => {

  return (

    <>

      <img src="./pinata_batman.png" alt="" />

      <AwesomeSlider
        media={[
          {
            source: '/path/to/image-0.png',
          },
          {
            source: '/path/to/image-1.png',
          },
          {
            source: '/path/to/image-2.png',
          },
        ]}
      />
      

    </>

  )
}
