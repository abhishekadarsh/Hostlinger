import { Component } from "react";
import "./navbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";
class Navbar extends Component {
  state = { clicked: false };

  handlaClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        {/* <h1 className="nav-logo">Office of KREATION</h1> */}
        <a href="/">
          <img className="nav-logo" src={logo} alt="Office of KREATION" />
        </a>
        <div className="menu-icons" onClick={this.handlaClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
