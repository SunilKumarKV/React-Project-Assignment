import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
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
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image']
    ]
  };

  return (
    <div className="rich-text-editor">
      <h3 className="editor-title">Rich Text Editor</h3>
      <ReactQuill 
        value={content}
        onChange={setContent}
        modules={modules}
        placeholder="Write your content here..."
        className="editor-input"
      />
      <button onClick={handleSave} className="btn save-button">Save Content</button>
      <button onClick={clearContent} className="btn save-button">Clear Content</button>
    </div>
  );
};

export default RichTextEditor;
