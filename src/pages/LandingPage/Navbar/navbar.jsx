import "./navbar.css";
import Logo from "./../../../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navDisplay, setNavDisplay] = useState(false);
  const toggleNav = () => {
    setNavDisplay(!navDisplay);
  };
  return (
    <div className="navbar">
      <div className="nav">
        {/* Navbar Logo */}
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>

        {/* Navbar List  */}
        <div className="nav-collapse" data-visible={navDisplay}>
          <div className="nav-list">
            <ul>
              <li>
                <Link className="li" to="/">Home</Link>
              </li>
              <li>Pricing</li>
              <li>Company</li>
              <li>Case Studio</li>
              <li>Products</li>
            </ul>
          </div>

          {/* Login & Sign Up Section in Nav */}
          <div className="loginSignUp">
            <Link className="button" to="/login">
              <button>Login</button>
            </Link>
            <Link className="button" to="/signUp">
              <button>Sign Up Free</button>
            </Link>
          </div>
        </div>

        <div className="nav-btn" data-visible={navDisplay} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
