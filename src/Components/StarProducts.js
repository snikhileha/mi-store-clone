import React from 'react'
import data from '../data/data.json'
import '../Styles/StarProducts.css'

const StarProducts = ({StarProduct}) => {
  return (
    <div className='startProduct'>
        <div><a href={data.starProduct[0].url} ><img src = {data.starProduct[0].image} alt="1st product"/></a></div>
        <div>
            <a href={data.starProduct[1].url}><img src = {data.starProduct[1].image} alt="2nd product"/> </a>
            <a href={data.starProduct[2].url}><img src = {data.starProduct[2].image} alt="3rd product"/> </a>
            <a href={data.starProduct[3].url}><img src = {data.starProduct[3].image} alt="4th product"/> </a>
        </div>
    </div>

  )
}

export default StarProducts