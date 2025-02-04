import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const Layout = ({ children }) => {
    const { isAuthenticated, logout } = useAuth();
    return (_jsxs("div", { className: "container", children: [_jsx("header", { className: "flex-center", children: _jsxs("nav", { children: [_jsx(Link, { to: "/", className: "btn", children: "Home" }), !isAuthenticated ? (_jsx(Link, { to: "/login", className: "btn", children: "Login" })) : (_jsxs(_Fragment, { children: [_jsx(Link, { to: "/dashboard", className: "btn", children: "Dashboard" }), _jsx("button", { onClick: logout, className: "btn", children: "Logout" })] }))] }) }), _jsx("main", { className: "animate-fade", children: children }), _jsx("footer", { className: "flex-center", children: "\u00A9 2024 React Assignment Project" })] }));
};
export default Layout;
