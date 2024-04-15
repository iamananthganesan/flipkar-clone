import React from 'react'
import Slider from "react-slick";
import './BannerCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const BannerCarousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='Banner-carosel'>
            <Slider {...settings}>
                {data.map((carosel) => {
                    return (
                        <div>
                            <figure key={carosel.id}>
                                <img src={carosel.Imgsrc} alt={carosel.Imgsrc} />
                            </figure>
                        </div>
                    )
                })}

            </Slider>
        </div>
    )
}

export default BannerCarousel
