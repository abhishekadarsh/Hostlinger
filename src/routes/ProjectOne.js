import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/projectSlider.css"
import videoSource from "../media/Project1/video1.mp4";
import ImageSliderOne from "../components/ImageSliderOne";
import { SliderDataOne } from "../components/SliderDataOne";

function projectOne() {
    return (
      <>
        <Navbar />
        <div className="video-container">
          <video src={videoSource} autoPlay loop muted />
        </div>
        <ImageSliderOne slides={SliderDataOne} />
        <Footer />
      </>
    );
  }
  
  export default projectOne;