import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const DashboardPage = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData') || '{}');
        if (data && data.name) {
            setUserData(data);
        }
        else {
            setUserData(null);
        }
    }, []);
    const profileData = [
        { name: 'Profile Completion', value: 75 },
        { name: 'Engagement', value: 60 },
        { name: 'Activity Level', value: 85 }
    ];
    return (_jsxs("div", { className: "container dashboard-container", children: [_jsx("h2", { children: "User Dashboard" }), userData ? (_jsx("div", { className: "profile-section", children: _jsxs("div", { className: "profile-card", children: [_jsx("h3", { children: "User Profile" }), _jsxs("p", { children: ["Name: ", userData.name] }), _jsxs("p", { children: ["Email: ", userData.email] }), _jsxs("p", { children: ["Phone: ", userData.phone] })] }) })) : (_jsx("p", { children: "No user data available" })), _jsx("div", { className: "chart-section", children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: profileData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "value", fill: "#3498db" })] }) }) })] }));
};
export default DashboardPage;
