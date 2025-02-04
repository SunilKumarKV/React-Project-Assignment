import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="container flex-center login-container">
      <div className="login-card">
        <h2>Login</h2>
        <button onClick={handleLogin} className="btn google-btn">
          Sign in with Google (Mock)
        </button>
      </div>

      <footer className="footer">
        <p>© 2024 React Assignment Project</p>
      </footer>
    </div>
  );
};

export default LoginPage;
