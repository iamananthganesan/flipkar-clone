import React from 'react'
import './CategoryBar.css'
const CategoryBar = ({ imageSrc, categoryName }) => {
    return (
        <div className='category-bar'>
            <div>
                <figure className='category-bar-img'>
                    <img src={imageSrc} alt='categoryImg' />
                </figure>
                <p className='category-bar-name'>{categoryName}</p>
            </div>

        </div>
    )
}

export default CategoryBar
