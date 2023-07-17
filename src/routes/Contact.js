import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactUsGoogleform";
import Footer from "../components/Footer";
import logoImage from "../media/logoImage.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <img src={logoImage} alt="Loading..." />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
