import './App.css';
import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import NavOptions from './Components/NavOptions.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from "./Components/Slider.js";
import data from './data/data.json'
import Offers from './Components/Offers.js'
import Heading from './Components/Heading.js'
import StarProducts from './Components/StarProducts.js'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu.js'
import HotAccessories from './Components/HotAccessories.js'
import ProductReviews from './Components/ProductReviews.js'
import Videos from './Components/Videos.js'
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'



function App() {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar/>
        <Routes>
          <Route exact path="/xiaomiPhones" element={<NavOptions xiaomiPhones={data.xiaomiPhones} />} />
          <Route exact path="/redmiPhones" element={<NavOptions redmiPhones={data.redmiPhones} />} />
          <Route exact path="/tv" element={<NavOptions tv={data.tv} />} />
          <Route exact path="/laptopsAndTablets" element={<NavOptions laptopsAndTablets={data.laptopsAndTablets} />} />
          <Route exact path="/accessories" element={<NavOptions accessories={data.accessories} />} />
          <Route exact path="/home" element={<NavOptions home={data.home} />} />
          <Route exact path="/audio" element={<NavOptions audio={data.audio} />} />
          
        </Routes>
        <Slider start={data.banner.start}
         />
        <Offers start={data.Offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProducts StarProducts={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route exact path="/mobileStore" element={<HotAccessories mobileStore={data.hotAccessories.mobileStore}
            mobileCover={data.hotAccessoriesCover.mobileStore} />} />
          <Route exact path="/tv" element={<HotAccessories tv={data.hotAccessories.tv}
            tvCover={data.hotAccessoriesCover.tv} />} />
          <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories}
            mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
          <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle}
            lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
          <Route exact path="/smartHome" element={<HotAccessories smartHome={data.hotAccessories.smartHome}
            smartHomeCover={data.hotAccessoriesCover.smartHome} />} />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner} />
        <Footer footer={data.footer} />
      </Router>
    </>
  );
}

export default App;
