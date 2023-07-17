import "./WorkStyle.css";
import WorkData from "./WorkData";
import ProMed1 from "../media/Project1/image3.jpg";
import ProMed2 from "../media/Project2/image2.jpg";
import ProMed3 from "../media/Project3/image7.jpg";

function Work() {
  return (
    <div className="work">
      <h1>Recent work</h1>
      <p>we provide best service</p>
      <div className="WorkData">
        <WorkData
          image={ProMed1}
          heading="Project 1"
          projectUrl="/projectOne"
          text="Experience the epitome of design excellence with Office of Kreation's 
          latest project. Meticulously crafted and thoughtfully curated, this masterpiece 
          showcases our unrivaled expertise in transforming spaces. From captivating 
          aesthetics to seamless functionality, every detail is a testament to our commitment 
          to creating extraordinary interiors. Step into a world of timeless elegance and be 
          inspired."
        />

        <WorkData
          image={ProMed2}
          heading="Project 2"
          projectUrl="/projectTwo"
          text="Office of Kreation presents a bedroom project that redefines comfort 
          and elegance. Our expert designers have carefully crafted a serene sanctuary, 
          balancing soothing colors, luxurious fabrics, and bespoke furniture. Experience 
          the perfect blend of style and tranquility as we transform your bedroom into a 
          haven of relaxation and beauty."
        />

        <WorkData
          image={ProMed3}
          heading="Project 3"
          projectUrl="/projectThree"
          text="Office of Kreation proudly presents its latest interior design triumph, 
          a project that epitomizes sophistication and innovation. With meticulous attention 
          to detail, our team has crafted a space that seamlessly combines form and function. 
          From the harmonious color schemes to the carefully selected furnishings, every 
          element has been thoughtfully curated to create an environment that exudes elegance 
          and inspires creativity. Experience the transformative power of our design expertise 
          and let your space become a reflection of your unique vision and style."
        />
      </div>
    </div>
  );
}

export default Work;
