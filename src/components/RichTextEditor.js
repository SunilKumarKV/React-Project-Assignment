import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const RichTextEditor = () => {
    const [content, setContent] = useState('');
    useEffect(() => {
        const savedContent = localStorage.getItem('editorContent');
        if (savedContent) {
            setContent(savedContent);
        }
    }, []);
    useEffect(() => {
        const autoSave = setInterval(() => {
            localStorage.setItem('editorContent', content);
        }, 5000); // Save every 5 seconds
        return () => clearInterval(autoSave);
    }, [content]);
    const handleSave = () => {
        localStorage.setItem('editorContent', content);
        alert('Content saved successfully!');
    };
    const clearContent = () => {
        setContent('');
        localStorage.removeItem('editorContent');
    };
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image']
        ]
    };
    return (_jsxs("div", { className: "rich-text-editor", children: [_jsx("h3", { className: "editor-title", children: "Rich Text Editor" }), _jsx(ReactQuill, { value: content, onChange: setContent, modules: modules, placeholder: "Write your content here...", className: "editor-input" }), _jsx("button", { onClick: handleSave, className: "btn save-button", children: "Save Content" }), _jsx("button", { onClick: clearContent, className: "btn save-button", children: "Clear Content" })] }));
};
export default RichTextEditor;
