import "./FooterStyle.css";
import logo from "../media/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <a href="/">
            <img className="footer-Logo" alt="Loading..." src={logo} />
          </a>
          {/* <h1>Office of KREATION</h1> */}
          {/* <p>Choose your own design</p> */}
        </div>
        <div>
          <a href="mailto:officeofkreation@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://instagram.com/officeof__kreation?igshid=MzRlODBiNWFlZA==">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          {/* <a href="https://www.google.com/maps/place/Office+of+creations/@25.8593144,85.7961,15z/data=!4m6!3m5!1s0x39ed91a3adeba037:0xc7f531e3e94d618b!8m2!3d25.8593144!4d85.7961!16s%2Fg%2F11s5bzklff?entry=ttu">
            <i className="fa-solid fa-location-dot"></i>
          </a> */}
        </div>
      </div>
      <div className="bottom">
        <div>
          <a href="/">
            <i class="fa-solid fa-phone">&nbsp; Contact</i>
          </a>
          {/* <h4>Contact</h4> */}
          <p>+91 9608672225</p>
          <p>+91 9881472746</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-solid fa-envelope">&nbsp; Email</i>
          </a>
          {/* <h4>Email</h4> */}
          <p>officeofkreation@gmail.com</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-solid fa-location-dot">&nbsp; Address</i>
          </a>
          {/* <h4>Address</h4> */}
          <p>near power grid,Mohanpur</p>
          <p>Samastipur,Bihar</p>
          <p>848101</p>
        </div>

        <div>
          <a href="/contact">
            <i className="fa-solid fa-pen-to-square">&nbsp; Write Us</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
