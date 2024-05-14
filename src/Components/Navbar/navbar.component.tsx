// navbar.component.tsx
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    // Your logic to check login status and user data
  }, []);

  const logout = () => {
    // Your logout logic
    history.push('/login'); // Redirect to login page after logout
  }

  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <span>Exam Portal</span>
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <>
              <button onClick={logout}>Logout</button>
              {user && (
                <button onClick={() => history.push('/admin/profile')}>
                  {user.username}
                </button>
              )}
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavbarComponent;
