import React from 'react'
import './Home.css'
import { CategoryBarData, CarouselData, BestOf, Products } from '../../Mock/data'

import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel'
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
          <BannerCarousel data={CarouselData}/>
        </div>
      </div>
    </div>
  )
}

export default Home
