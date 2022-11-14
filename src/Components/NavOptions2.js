import React from 'react'
import NavCard from './NavCard.js'
import '../Styles/NavOptions.css'



const NavOptions2 = ({xiaomiPhones,redmiPhones, tv,laptopsAndTablets,accessories,home,audio}) => {
   
  return (
    <div className='navOptions'>
        {
             xiaomiPhones && xiaomiPhones.map((item,index)=>(
                <NavCard name={item.name} image={item.image} key={item.image} price={item.price} index={index.image}/>
            )) 
        }
         {
     redmiPhones && redmiPhones.map((item,index)=>(
                <NavCard name={item.name} image={item.image} price={item.price} index={index.image}/>
            )) 
        } 
        {
             tv && tv.map((item,index)=>(
                <NavCard name={item.name} image={item.image} price={item.price} index={index.image}/>
            )) 
        }
         {
     laptopsAndTablets && laptopsAndTablets.map((item,index)=>(
                <NavCard name={item.name} image={item.image} price={item.price} index={index.image}/>
            )) 
        }
         {
            accessories && accessories.map((item,index)=>(
                <NavCard name={item.name} image={item.image} price={item.price} index={index.image}/>
            ))
        }
         {
             home && home.map((item,index)=>(
                <NavCard name={item.name} image={item.image} price={item.price} index={index.image}/>
            )) 
        }
         {
             audio && audio.map((item,index)=>(
                <NavCard name={item.name} image={item.image} price={item.price} index={index.image}/>
            )) 
        }
         {
            (!laptopsAndTablets) ?
            (<div>
                <NavCard image="https://friconix.com/jpg/fi-ctlrxx-arrow-simple-thin.jpg"/>
                <span>View More</span>
                </div>):null
            }

    </div>
  )
}

export default NavOptions2