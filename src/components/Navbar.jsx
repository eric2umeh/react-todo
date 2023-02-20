import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // ...
    navigate('/', { replace: true });
  };

  return (
    <>
      <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? 'close' : 'open'}
      </button>
      <nav className="navbar">
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                {link.path === 'login' ? (
                  !user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : link.path === 'profile' ? (
                  user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>

      {user && (
        <div className="logout">
          <p>{user}</p>
          {<button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};
export default Navbar;
