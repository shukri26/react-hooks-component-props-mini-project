
import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from "./About";
import ArticleList from "./ArticleList";


function App() {
  const name = blogData.name
  const about = blogData.about
  const image = blogData.image

  return (
    <div className="App">
       <Header name={name} />
       <About about={about} image={image}/>
       <ArticleList/>
    </div>
  );
}

export default App;