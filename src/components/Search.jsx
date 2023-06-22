import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <h1>
        Cari Artikal : <br />
        <input
          onChange={onSearchChange}
          className="w-64 rounded-md border text-green-700 border-gray-300 p-3 placeholder:font-mono placeholder:font-light focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
        ></input>
      </h1>

      <div>
        Ditemukan {props.totalPosts} data dengan hasil pencarian kata
        <span className="text-green-700 font-mono"> {search}</span>
      </div>
    </>
  );
}

export default Search;
