import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eyeshadow from './assets/eyeshadow.webp'
import eyeshadow1 from './assets/eyeshadow1.webp'
import blush from './assets/pinkflash-blushwebp.webp'
import blush1 from './assets/pinkflash-blushwebp1.webp'
import powder from './assets/pinkflash-powder.webp'
import powder1 from './assets/pinkflash-powder1.webp'
import spray from './assets/pinkflash-spray.webp'
import spray1 from './assets/pinkflash-spray1.webp'
import settingspray from './assets/settingspray.webp'
import settingspray1 from './assets/settingspray1.webp'
import './NewArrival.css'
import Badge from 'react-bootstrap/Badge';



const NewArrival = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <h1 className='fw-bolder m-5'>NEW ARRIVALS</h1>
      <div className="slider-container mt-5 p-5 ">
        <Slider {...settings} fluid="lg">
          <div>
            <div className='eyeshadow-div'>
              <Badge style={{ width: '70px' }} bg="secondary text-white ">NEW IN</Badge>

              <img className='eyeshadowImg position-absolute ' style={{ width: '300px',height:"300px" }} src={eyeshadow} alt="" />
              <img id='eyeshadow1Img' style={{ width: '300px', height:"300px" }} src={eyeshadow1} alt="" />

            </div>
            <div>
              <i className="fa-regular fa-heart"></i>
              <a className='proHead' href=""><h3>PINKFLASH 3 Pan Eyeshadow</h3></a>
              <p>₹626 <s className='text-secondary  ms-2  '>₹695</s> <span className=' p-2  ms-2 fw-bolder' style={{ backgroundColor: "brown", borderRadius: "5%" }}>10% OFF</span></p>
              <button className='btn  fw-bolder mt-3 w-50 AddCardBtn'>ADD TO CART</button>
            </div>


          </div>
          <div>
            <div className='eyeshadow-div'>
              <Badge style={{ width: '70px' }} bg="secondary text-white ">NEW IN</Badge>

              <img className='eyeshadowImg position-absolute' style={{ width: '300px' }} src={blush} alt="" />
              <img id='eyeshadow1Img' style={{ width: '300px' }} src={blush1} alt="" />

            </div>
            <div>
              <i className="fa-regular fa-heart"></i>
              <a className='proHead' href=""><h3>PINKFLASH Chic In Cheek Blush</h3></a>
              <p>₹266
              <s className='text-secondary ms-2 '>₹295
              </s> <span className=' p-2 ms-2 fw-bolder' style={{ backgroundColor: "brown", borderRadius: "5%" }}>10% OFF</span></p>
              <button className='btn  fw-bolder mt-3 w-50 AddCardBtn'>ADD TO CART</button>
            </div>


          </div>
          <div>
            <div className='eyeshadow-div'>
              <Badge style={{ width: '70px' }} bg="secondary text-white ">NEW IN</Badge>

              <img className='eyeshadowImg position-absolute' style={{ width: '300px',height:"300px" }} src={powder} alt="" />
              <img id='eyeshadow1Img' style={{ width: '300px', height:"300px" }} src={powder1} alt="" />

            </div>
            <div>
              <i className="fa-regular fa-heart"></i>
              <a className='proHead' href=""><h3>PINKFLASH Oil Controller Translucent Loose Powder
              </h3></a>
              <p>₹495 <s className='text-secondary  ms-2  '>₹555</s> <span className=' p-2  ms-2 fw-bolder' style={{ backgroundColor: "brown", borderRadius: "5%" }}>10% OFF</span></p>
              <button className='btn  fw-bolder mt-3 w-50 AddCardBtn'>ADD TO CART</button>
            </div>


          </div>
          <div>
            <div className='eyeshadow-div'>
              <Badge style={{ width: '70px' }} bg="secondary text-white ">NEW IN</Badge>

              <img className='eyeshadowImg position-absolute' style={{ width: '300px',height:"300px" }} src={spray} alt="" />
              <img id='eyeshadow1Img' style={{ width: '300px', height:"300px" }} src={spray1} alt="" />

            </div>
            <div>
              <i className="fa-regular fa-heart"></i>
              <a className='proHead' href=""><h3>PINKFLASH Double Fixing Setting Spray
              </h3></a>
              <p>₹626
              <s className='text-secondary  ms-2  '>₹695
              </s> <span className=' p-2  ms-2 fw-bolder' style={{ backgroundColor: "brown", borderRadius: "5%" }}>10% OFF</span></p>
              <button className='btn  fw-bolder mt-3 w-50 AddCardBtn'>ADD TO CART</button>
            </div>


          </div>
          <div>
            <div className='eyeshadow-div'>
              <Badge style={{ width: '70px' }} bg="secondary text-white ">NEW IN</Badge>

              <img className='eyeshadowImg position-absolute' style={{ width: '300px',height:"300px" }} src={settingspray} alt="" />
              <img id='eyeshadow1Img' style={{ width: '300px', height:"300px" }} src={settingspray1} alt="" />

            </div>
            <div>
              <i className="fa-regular fa-heart"></i>
              <a className='proHead' href=""><h3>L.A. Girl Pro Perfect Setting Spray-Blurring Matte
              </h3></a>
              <p>₹1,035

              <s className='text-secondary  ms-2  '>₹1,150

              </s> <span className=' p-2  ms-2 fw-bolder' style={{ backgroundColor: "brown", borderRadius: "5%" }}>10% OFF</span></p>
              <button className='btn  fw-bolder mt-3 w-50 AddCardBtn'>ADD TO CART</button>
            </div>


          </div>
        </Slider>
      </div>
    </>
  )
}

export default NewArrival