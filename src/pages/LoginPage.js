import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate('/dashboard');
    };
    return (_jsxs("div", { className: "container flex-center login-container", children: [_jsxs("div", { className: "login-card", children: [_jsx("h2", { children: "Login" }), _jsx("button", { onClick: handleLogin, className: "btn google-btn", children: "Sign in with Google (Mock)" })] }), _jsx("footer", { className: "footer", children: _jsx("p", { children: "\u00A9 2024 React Assignment Project" }) })] }));
};
export default LoginPage;
