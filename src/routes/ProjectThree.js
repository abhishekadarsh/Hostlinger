import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/projectSlider.css"
import videoSource from "../media/Project3/video3.mp4";

import ImageSliderThree from "../components/ImageSliderThree";
import { SliderDataThree } from "../components/SliderDataThree";

function projectThree() {
    return (
      <>
        <Navbar />
        <div className="video-container">
          <video src={videoSource} autoPlay loop muted />
        </div>
        <ImageSliderThree slides={SliderDataThree} />
        <Footer />
      </>
    );
  }
  
  export default projectThree;