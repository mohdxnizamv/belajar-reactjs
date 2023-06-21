import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari Artikal :{" "}
        <input
          onChange={onSearchChange}
          className="w-full rounded-md border border-gray-300 p-3 placeholder:font-sans placeholder:font-light focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></input>
      </div>

      <div className="font-extrabold">
        Ditemukan data dengan hasil pencarian kata {search}
      </div>
    </>
  );
}

export default Search;
