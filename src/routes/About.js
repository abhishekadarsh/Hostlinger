// import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import logoImage from "../media/logoImage.jpg";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <img src={logoImage} alt="Loading..." />
      </div>
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
