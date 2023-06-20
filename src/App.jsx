import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article name="Number One" family={["reactjs", "nextjs", "nodejs"]} />
      <br />
      <Article name="Number Two" family={["vuejs", "nuxtjs", "denojs"]} />
    </div>
  );
}

export default App;
