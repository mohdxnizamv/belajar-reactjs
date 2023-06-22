import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.lenght);
  };

  return (
    <>
      <h1 className="font-bold text-sky-600 text-2xl">Customer By Json File</h1>

      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />

      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
