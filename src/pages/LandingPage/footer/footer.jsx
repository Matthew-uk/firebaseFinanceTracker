import "./footer.css";
import Logo from "./../../../assets/images/logo.png";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const styles = {
    paddingInline: "0 8px",
    cursor: 'pointer'
  };
  return (
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="foot_nav">
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Company</li>
          <li>Case Studio</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="socials">
        <FaInstagram style={styles} size={30} />
        <FaTwitter style={styles} size={30} />
        <FaLinkedin style={styles} size={30} />
      </div>
    </div>
  );
}
