import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useAuth } from '../contexts/AuthContext';
const DashboardPage = () => {
    const { logout } = useAuth();
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const profileData = [
        { name: 'Profile Completion', value: 75 },
        { name: 'Engagement', value: 60 },
        { name: 'Activity Level', value: 85 }
    ];
    return (_jsxs("div", { children: [_jsx("h2", { children: "User Dashboard" }), _jsxs("div", { children: [_jsx("h3", { children: "User Profile" }), _jsxs("p", { children: ["Name: ", userData.name] }), _jsxs("p", { children: ["Email: ", userData.email] })] }), _jsxs(BarChart, { width: 400, height: 250, data: profileData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "value", fill: "#8884d8" })] }), _jsx("button", { onClick: logout, children: "Logout" })] }));
};
export default DashboardPage;
