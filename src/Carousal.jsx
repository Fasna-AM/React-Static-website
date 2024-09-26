import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousalVideo from './assets/vedio.mp4'
import carousalImg1 from './assets/crousal-img1.webp'
import carousalImg2 from './assets/crousal-img2.webp'

const Carousal = () => {
  return (
    <div > 
      <Carousel >
    <Carousel.Item interval={4000}>
      <video style={{width:'100%', height:'100vh'}} src={carousalVideo} autoPlay loop />
    </Carousel.Item >
    <Carousel.Item interval={2000}>
    <img style={{width:'100%', height:'100vh'}} src={carousalImg2} alt="" />

    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <img style={{width:'100%',height:'100vh'}} src={carousalImg1} alt="" />

    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Carousal