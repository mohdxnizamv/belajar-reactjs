import posts from "../posts.json";
import Article from "../components/Article";

function Homepage() {
  return (
    <>
      <h1>Customer By Json File</h1>
      {posts.map((blog) => (
        <Article
          firstName={blog.firstName}
          lastName={blog.lastName}
          gender={blog.gender}
          age={blog.age}
          number={blog.number}
        />
      ))}
    </>
  );
}

export default Homepage;
