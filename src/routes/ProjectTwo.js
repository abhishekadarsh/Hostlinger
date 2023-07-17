import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/projectSlider.css"

import ImageSliderTwo from "../components/ImageSliderTwo";
import { SliderDataTwo } from "../components/SliderDataTwo";

function projectTwo() {
    return (
      <>
        <Navbar />
        <ImageSliderTwo slides={SliderDataTwo} />
        <Footer />
      </>
    );
  }
  
  export default projectTwo;