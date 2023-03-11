import Right from "./../../../assets/images/newLectureFree.png";
import { Link } from "react-router-dom";
import './hero.css';
export default function Hero() {
  return(
    <div className="hero">
      <div className="left">
        <h2>Anyone, anywhere can teach online.</h2>
        <p>
          Bring together live classes and communities and payments - all in
          one place.
        </p>
        <div className="buttons">
          <Link to='/signup'>
            <button>Sign up free</button>
          </Link>
          {/* <button>Request demo &gt;</button> */}
        </div>
      </div>
      <div className="right">
        <img src={Right} alt="" />
      </div>
    </div>
  );
}