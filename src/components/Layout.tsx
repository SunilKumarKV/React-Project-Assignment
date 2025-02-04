import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="container">
      <header className="flex-center">
        <nav>
          <Link to="/" className="btn">Home</Link>
          {!isAuthenticated ? (
            <Link to="/login" className="btn">Login</Link>
          ) : (
            <>
              <Link to="/dashboard" className="btn">Dashboard</Link>
              <button onClick={logout} className="btn">Logout</button>
            </>
          )}
        </nav>
      </header>
      <main className="animate-fade">{children}</main>
      <footer className="flex-center">
        © 2024 React Assignment Project
      </footer>
    </div>
  );
};

export default Layout;