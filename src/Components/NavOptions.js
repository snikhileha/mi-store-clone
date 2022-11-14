import React from 'react'
import NavCard from './NavCard.js'
import '../Styles/NavOptions.css'



const NavOptions = ({ xiaomiPhones, redmiPhones, tv, laptopsAndTablets, accessories, home, audio }) => {

    return (
        <div className='navOptions'>
            {
                xiaomiPhones && xiaomiPhones.map((item, index) => (
                    <NavCard name={item.name} image={item.image} key={item.image} price={item.price} index={index.image} />
                ))
            }
            {
                redmiPhones && redmiPhones.map((item, index) => (
                    <NavCard name={item.name} image={item.image} price={item.price} index={index.image} />
                ))
            }
            {
                tv && tv.map((item, index) => (
                    <NavCard name={item.name} image={item.image} price={item.price} index={index.image} />
                ))
            }
            {
                laptopsAndTablets && laptopsAndTablets.map((item, index) => (
                    <NavCard name={item.name} image={item.image} price={item.price} index={index.image} />
                ))
            }
            {
                accessories && accessories.map((item, index) => (
                    <NavCard name={item.name} image={item.image} price={item.price} index={index.image} />
                ))
            }
            {
                home && home.map((item, index) => (
                    <NavCard name={item.name} image={item.image} price={item.price} index={index.image} />
                ))
            }
            {
                audio && audio.map((item, index) => (
                    <NavCard name={item.name} image={item.image} price={item.price} index={index.image} />
                ))
            }
            {
                (!laptopsAndTablets) ?
                    (<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <NavCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/0FFCA9DE-7732-38F0-83D9-95997D45C822.jpg?width=140&height=140" />
                        <span>View More</span>
                    </div>) : null
            }

        </div>
    )
}

export default NavOptions