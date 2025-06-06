import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function Markdown() {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleChange}
        placeholder="# Type your markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Markdown;
