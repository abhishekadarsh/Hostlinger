import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
// import ProjectAnimation from "../components/ImageSlider";
import logoImage from "../media/logoImage.jpg";
function Project() {
  return (
    <>
      <Navbar />
      {/* <div className="video-container">
        <img src={logoImage} alt="Loading..." />
      </div> */}
      {/* <ProjectAnimation/> */}
      <ImageSlider slides={SliderData} />
      <Work />
      <Footer />
    </>
  );
}

export default Project;
