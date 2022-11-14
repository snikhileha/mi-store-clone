import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Banner.css'



const Banner = ({ banner }) => {



    return (
        <div className='information' >

            <Carousel variant='dark'  >

                {banner.end.map((item, index) => (

                    <Carousel.Item key={item.image} id="banner"  interval={1000} keyboard='true'>
                        

                            <img
                                className="d-block w-100"
                                id="bannerImage"
                                src={item.image}
                                alt={`${index} banner`}
                            />

                            <Carousel.Caption dots='true'>
                                <div className='informative' style={{ display: "flex",marginBottom:"110px", flexDirection: "column", alignItems: "center" }} >
                                    <h3 style={{margin:"12px", color: 'white', fontSize: "50px",fontWeight: "lighter" }}>{item.name}</h3>
                                    <p style={{margin:"15px", width: "8vw", height: "3px", backgroundColor: "white" }}></p>

                                    <p style={{ marginTop:"15px", color: "white" }} >{item.description}</p>
                                    <p style={{ color: "white" }}>{item.source}</p>
                                    <u style={{ color: "white" }}>Read more</u>
                                </div>

                            </Carousel.Caption>
                        
                    </Carousel.Item>

                ))}


            </Carousel>
        </div>
    )
}

export default Banner