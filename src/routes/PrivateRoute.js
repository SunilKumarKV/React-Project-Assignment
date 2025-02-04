import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login" });
    }
    return _jsx(_Fragment, { children: children });
};
export default PrivateRoute;
