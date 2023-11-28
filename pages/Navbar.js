// NavBar.js
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {

  return (
    <>
        <nav className="navbar">
          <Link to="/" className="site-title">
            Chat App
          </Link>
          <div className="links">
            <ul>
              <li>
                <NavLink exact to="/Home" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/ChatList" activeClassName="active">
                  Chat
                </NavLink>
              </li>
              <li>
                 <NavLink to="/About" activeClassName="active">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
}