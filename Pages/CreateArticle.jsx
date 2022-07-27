import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../src/App.css";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [articles, setArticles] = useState([]);

  const article = [];
  const length = localStorage.length;

  console.log(length);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (length == 0) {
      localStorage.setItem(
        `0`,
        JSON.stringify({ title: title, content: content })
      );
    } else {
      localStorage.setItem(
        `${length}`,
        JSON.stringify({ title: title, content: content })
      );
    }
  };

  return (
    <div>
      <div className="main-container">
        <Link to={"/"}>Return to board</Link>
        <form onSubmit={(e) => handleSubmit(e)} className="article-form">
          <input
            type="text"
            name="title"
            id="article-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            name="content"
            id="article-content"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;
