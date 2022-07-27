import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const article = [];

  const length = localStorage.length;

  for (let i = 0; i < localStorage.length; i++) {
    article.push(JSON.parse(localStorage.getItem(`${i}`)));
  }

  console.log(article);

  return (
    <div className="App">
      <h1>Bulletin Board</h1>
      <div className="main-container">
        <Link className="create-article" to={"/create"}>
          Create New Article
        </Link>

        <ol>
          <li>
            <h2>Announcement 1</h2>
          </li>
          <li>
            <h2>Announcement 2</h2>
          </li>
          <li>
            <h2>Announcement 3</h2>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
