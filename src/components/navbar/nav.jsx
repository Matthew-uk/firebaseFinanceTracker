import { Link } from "react-router-dom";
import "./nav.css";
import { useLogOut } from "../../hooks/useLogOut";

export default function Nav() {
  const { error, isPending, logout, user } = useLogOut();
  const handleLogout = () => {
    logout();
    console.log(error);
  };

  return (
    <div className="loginNavbar">
      <div className="nav">
        <div className="nav-logo">
          <h2>
            <Link to="/" className="no-decoration">
              MTA
            </Link>
          </h2>
        </div>
        <div className="nav-btns">
          {user ? (
            <div className="userName">
              <p>{`Hello 👋🏽, ${user.displayName}`}</p>
              <button onClick={handleLogout}>
                {isPending ? "Logging Out" : "Log Out"}
              </button>
            </div>
          ) : (
            <>
              <Link to="/signup">
                <button className="signUpBtn">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="loginBtn">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
