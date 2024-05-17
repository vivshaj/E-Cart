import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FirstSlideImage from '../assets/first-slide.jpg'
import SecondSlideImage from '../assets/online-shopping-and-e-commerce-banner-vector.jpg'
import ThirdSlideImage from '../assets/third-slide.jpg'

function Banner() {
  return (
    <div className='w-100' style={{height:'500px;',marginTop:'100px'}}>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FirstSlideImage}
          alt="First slide"
          style={{objectFit:'cover'}}
        />
        <Carousel.Caption>
          <p>Discover Deals You Can't Resist!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={SecondSlideImage}
          alt="Second slide"
          style={{objectFit:'cover'}}
        />
        <Carousel.Caption>
          <p>Find Everything You Love in One Place</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ThirdSlideImage}
          alt="Third slide"
          style={{objectFit:'cover'}}
        />
        <Carousel.Caption>
          <p>
          Unbox Happiness with Every Purchase!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>       
    </div>
  )
}

export default Banner