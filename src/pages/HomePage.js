import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import UserDataForm from '../components/UserDataForm';
import RichTextEditor from '../components/RichTextEditor';
import ChartComponent from '../components/ChartComponent';
const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            document.body.classList.toggle('dark-mode', newMode);
            return newMode;
        });
    };
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        chartData: [
            { name: 'January', value: 50 },
            { name: 'February', value: 75 },
            { name: 'March', value: 100 },
            { name: 'April', value: 40 },
            { name: 'May', value: 65 },
        ],
    });
    const handleUserDataUpdate = (newUserData) => {
        // Save the updated data to localStorage
        localStorage.setItem('userData', JSON.stringify(newUserData));
        // Update the state with new data
        setUserData({
            ...newUserData,
            chartData: newUserData.chartData || userData.chartData,
        });
    };
    return (_jsxs("div", { className: "container", children: [_jsxs("header", { className: "flex-between", children: [_jsx("div", { className: "logo", children: _jsx("h1", { className: "animate-fade", children: "React Assignment Project" }) }), _jsxs("nav", { children: [_jsx(Link, { to: "/login", className: "btn", children: "Login" }), _jsx(Link, { to: "/dashboard", className: "btn", children: "Dashboard" }), _jsx("button", { onClick: toggleDarkMode, className: "btn", children: isDarkMode ? 'Light Mode' : 'Dark Mode' })] })] }), _jsx("main", { children: _jsxs("div", { className: "main-grid", children: [_jsx("div", { className: "grid-item", children: _jsx(Counter, {}) }), _jsx("div", { className: "grid-item", children: _jsx(RichTextEditor, {}) }), _jsx("div", { className: "grid-item", children: _jsx(UserDataForm, { onUpdate: handleUserDataUpdate }) }), _jsx("div", { className: "grid-item", children: _jsx(ChartComponent, { chartData: userData.chartData }) })] }) }), _jsx("footer", { className: "footer", children: _jsx("p", { children: "\u00A9 2024 React Assignment Project" }) })] }));
};
export default HomePage;
