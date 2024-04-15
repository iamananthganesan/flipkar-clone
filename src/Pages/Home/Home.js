import React from 'react'
import './Home.css'
import { CategoryBarData, CarouselData, BestOf, Products } from '../../Mock/data'

import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel'
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel'
const Home = () => {
  console.log("CategoryBarData", CategoryBarData)
  return (
    <div className='Home'>
      <div className='home-category-container'>
        <div className='home-category-bar'>
          {CategoryBarData.map((category, index) => {
            return (
              <CategoryBar
                imageSrc={category.imageSrc}
                categoryName={category.category} key={index} />
            )
          })
          }
        </div>
      </div>

      <div className='carosel-container'>
        <div className='carosel'>
          <BannerCarousel data={CarouselData} />
        </div>
      </div>

      <div className='product-carosel'>
        <ProductCarousel
          BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          Title="Best of Electronics"
          Data={BestOf.Electronics}
        />
        <ProductCarousel
          BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"          
          Title="Beauty,Food,Toys"
          Data={BestOf.Electronics}
        />
        <ProductCarousel
          BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          Title="Winter Essentials"
          Data={BestOf.Electronics}
        />
        <ProductCarousel
          BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          Title="Wedding & Gifting Specials"
          Data={BestOf.Electronics}
        />
      </div>
    </div>
  )
}

export default Home
