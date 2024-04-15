import React from 'react'
import './ProductCarousel.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsCarosel = ({ BgImg, Title, Data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  return (
    <div className='product-carousel'>

    </div>
  )
}

export default ProductsCarosel
