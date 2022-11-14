import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Slider.css';




const Slider = ({ start }) => {

  return (
    <>
      <div className='slider'>
        <Carousel fade>
          {
            start.map((item) => (
              <Carousel.Item  >
                
                
                <img
                  className="d-block w-100"
                  src={item}
                  alt="First slide"
                />
                
              </Carousel.Item>
            ))}

        </Carousel >
      </div>
    </>
  )
}

export default Slider