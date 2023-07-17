import "./HomeStyle.css";
import img1 from "../media/Project1/image3.jpg";
import img3 from "../media/Project1/image5.jpg";
import img2 from "../media/Project2/image2.jpg";
import img4 from "../media/Project2/image4.jpg";

const HomeContent = () => {
  return (
    <div className="destination">
      <h1>Office of Kreation</h1>
      <p>INTERIOR DESIGN COMPANY</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Show us your style.</h2>
          <p>
          At the Office of Kreation, we embrace your unique style. Collaborate with us to create 
          an extraordinary workspace that reflects your brand, values, and aspirations.<br></br>
          Share your vision, preferences, and inspirations. From furniture to lighting, we'll 
          incorporate your aesthetic into every detail of your office.
          <br></br>
          Let's embark on a creative journey together. Transform your workspace into an 
            inspiring environment that energizes your team and impresses your clients.
          <br></br>
          Show us your style and let the Office of Kreation bring your dream workspace to life!</p>
          
        </div>

        <div className="image">
          <img alt="Loading..." src={img1} />
          <img alt="Loading..." src={img2} />
        </div>
      </div>

      <div className="second-des">
        <div className="des-text">
          <h2>Reimagine your space</h2>
          <p>
          Transform with us. At the Office of Kreation, we bring your vision to life.<br></br>
          Collaborate and create. Share your ideas, and we'll tailor a design to your unique style.<br></br>
          Embark on a creative journey. From concept to execution, we guide every step.<br></br>
          Experience the power of well-designed spaces that inspire and enhance.<br></br>
          Let's reimagine your space. Homes, offices, or commercial, we make it remarkable.<br></br>
          Reimagine with the Office of Kreation. Get inspired and in awe.
          </p>
        </div>

        <div className="image">
          <img alt="Loading..." src={img3} />
          <img alt="Loading..." src={img4} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
