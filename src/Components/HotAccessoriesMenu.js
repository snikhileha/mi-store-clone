import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to='/mobileStore'>Mobile Store</Link>
        <Link className='HotAccessoriesLink' to='/tv'>TV's</Link>
        <Link className='HotAccessoriesLink' to='/mobileAccessories'>Mobile Accessories</Link>
        <Link className='HotAccessoriesLink' to='/lifeStyle'>Lifestyle</Link>
        <Link className='HotAccessoriesLink' to='/smartHome'>Smart Home</Link>
    </div>
  )
}

export default HotAccessoriesMenu