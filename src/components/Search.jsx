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
        Cari Artikal : <input onChange={onSearchChange}></input>
      </div>

      <small>Ditemukan 0 data dengan hasil pencarian kata {search}</small>
    </>
  );
}

export default Search;