import React from 'react'
import VideoCard from './VideoCard.js'
import '../Styles/Videos.css'

const Videos = ({videos}) => {
  return (
    <div className='Videos'>
        {
            videos.map((item,index)=>(
                <VideoCard name={item.name} index={index} image={item.image} key={item.image}/>
            ))
        }
    </div>
  )
}

export default Videos