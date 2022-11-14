import React from 'react'
import Offeren from './Offeren.js'
import data from '../data/data.json'
import '../Styles/Offers.css'

const Offers = ({ Offer }) => {
  return (
    <div className='offersSection'>
      {
       data.offer.map((item, index) => (
          <Offeren key={item.image} index={index} src={item.image} link={item.url} />
       ))}
    </div>
  )
}

export default Offers