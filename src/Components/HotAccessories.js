import React from 'react'
import HotItemCard from "./HotItemCard.js"
import '../Styles/HotAccessories.css'

const HotAccessories = ({ mobileStore, mobileCover, tv, tvCover, mobileAccessories
    , mobileAccessoriesCover, lifeStyle, lifeStyleCover, smartHome, smartHomeCover }) => {
    return (
        <div className='HotAccessories' >
            <div>
                <img src={mobileCover || tvCover || mobileAccessoriesCover || lifeStyleCover || smartHomeCover} alt='cover' />
            </div>
            {/* -------2nd section------- */}
            <div>
                {
                    mobileStore && mobileStore.map((item, index) => (
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index} />
                    ))}
                {
                    tv && tv.map((item, index) => (
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index} />
                    ))}
                {
                    mobileAccessories && mobileAccessories.map((item, index) => (
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index} />
                    ))}
                {
                    lifeStyle && lifeStyle.map((item, index) => (
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index} />
                    ))}
                {
                    smartHome && smartHome.map((item, index) => (
                        <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}
                            index={index} />
                    ))}
                {
                    (!lifeStyle) ?
                        (<HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />) : null
                }
                 




            </div>
        </div>
    )
}

export default HotAccessories