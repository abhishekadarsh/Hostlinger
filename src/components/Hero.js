import "./HeroStyle.css";
import videoSource from "../media/video.mp4";
function Hero() {
  return (
    <div className="video-container">
      <video src={videoSource} autoPlay loop controls muted />
    </div>
  );
}

export default Hero;
