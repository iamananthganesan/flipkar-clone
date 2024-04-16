import React from 'react'
import './ProductCarousel.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryBanner from '../CategoryBanner/CategoryBanner';

import { Link } from 'react-router-dom'

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
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


const Next = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};
const Prev = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIosNew
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};
  return (
    <div className='CategoryCarousel'>
      <div className='CategoryCarousel-left' style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}>
        <p>{Title}</p>
        <button>View all</button>
      </div>
      <div className='CategoryCarousel-right'>
        <Slider {...settings} nextArrow={<Next />} prevArrow={<Prev />}>
          {Data.map((item, index) => {
            return (
              <Link to={"/products"} key={index}>
                <CategoryBanner ImgSrc={item.ImgSrc} Title={item.CategoryName} Brand={item.Brand} />
              </Link>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default ProductsCarosel
