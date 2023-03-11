import "./startTeaching.css";
import { Link } from "react-router-dom";

export default function StartTeaching() {
  return (
    <div className="startTeaching">
      <div className="box">
        <h3>Get started with lecture free?</h3>
        <p></p>
        <Link to='/signup'>
        <button>Sign Up Here</button>
        </Link>
      </div>
    </div>
  );
}
