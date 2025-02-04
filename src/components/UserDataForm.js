import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
const UserDataForm = ({ onUpdate }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [, setIsFormDirty] = useState(false);
    const onSubmit = (data) => {
        const userDataWithId = { ...data, id: uuidv4() };
        const updatedUserData = {
            ...userDataWithId,
            chartData: [
                { name: 'January', value: 50 },
                { name: 'February', value: 75 },
                { name: 'March', value: 100 },
                { name: 'April', value: 40 },
                { name: 'May', value: 65 },
            ],
        };
        // Save updated data to localStorage
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        // Pass the data back to the parent
        onUpdate(updatedUserData);
        reset();
        setIsFormDirty(false);
    };
    return (_jsxs("div", { className: "form-container", children: [_jsx("h3", { className: "form-title", children: "User Information Form" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), onChange: () => setIsFormDirty(true), children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Full Name" }), _jsx("input", { id: "name", ...register('name', { required: 'Name is required' }), className: "form-input", placeholder: "Enter your full name" }), errors.name && _jsx("span", { className: "error-message", children: errors.name.message })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { id: "email", type: "email", ...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                }), className: "form-input", placeholder: "Enter your email" }), errors.email && _jsx("span", { className: "error-message", children: errors.email.message })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "phone", children: "Phone Number" }), _jsx("input", { id: "phone", type: "text", ...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid phone number'
                                    }
                                }), className: "form-input", placeholder: "Enter your phone number" }), errors.phone && _jsx("span", { className: "error-message", children: errors.phone.message })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "address", children: "Address" }), _jsx("textarea", { id: "address", ...register('address', { required: 'Address is required' }), className: "form-input", placeholder: "Enter your address" }), errors.address && _jsx("span", { className: "error-message", children: errors.address.message })] }), _jsx("button", { type: "submit", className: "submit-button", children: "Save User Data" })] })] }));
};
export default UserDataForm;
