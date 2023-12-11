import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function NavBar() {
  const {isLoggedIn, user, logOutUser} = useContext(AuthContext);
  return(
    <header>
      <nav className="navbar">
        <ul>
          <li>General</li>
          {!isLoggedIn ?
            <>
              <li> <Link to="/signup">Sign Up</Link> </li>
              <li> <Link to="login">Login</Link> </li>
            </>
           : 
           <>
              <li> <Link onClick={logOutUser}>Logout</Link> </li>
              <li> <Link to="/events">Next Schedule</Link> </li>
              <li>Myself</li>
           </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;