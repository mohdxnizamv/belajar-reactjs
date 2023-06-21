import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState([]);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
  };

  return (
    <>
      <h1>Customer By Json File</h1>

      <Search onSearchChange={onSearchChange} />

      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
