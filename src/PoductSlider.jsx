import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bestseller from './assets/bestseller.webp'
import bath from './assets/bath.webp'
import combo from './assets/combo.webp'
import fragrance from './assets/Fragrance.webp'
import hair from './assets/hair.webp'
import makeup from './assets/makeup.webp'
import skin from './assets/skin.webp'








const PoductSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
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
            <div className="slider-container mt-5 p-5">
                <Slider {...settings}>
                    <div>
                        <img style={{width:'200px'}} src={bestseller} alt="" />
                        <h3 className='ms-5'>Best Sellers</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={skin} alt="" />

                        <h3 className='ms-5 px-4'>Skin</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={makeup} alt="" />

                        <h3 className='ms-5'>Makeup</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={hair} alt="" />

                        <h3 className='ms-5 px-4'>Hair</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={fragrance} alt="" />

                        <h3 className='ms-4'>Fragrance</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={bath} alt="" />

                        <h3 className='ms-4'>Bath & Body</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={combo} alt="" />

                        <h3 className='ms-5 px-4'>Combos</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={skin} alt="" />

                        <h3 className='ms-5 px-44'>Skin</h3>
                    </div>
                    <div>
                    <img style={{width:'200px'}} src={bestseller} alt="" />

                        <h3 className='ms-5'>Best Seller</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default PoductSlider