import React, { useState } from "react";
import "../styles/Search.css";
import { Users } from "../api/UsersList";
import Table from "./Table";

export default function Search() {
  const [searchItems, setSearchItems] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const handleSearch = (data) => {
    return data.filter((items) =>
      keys.some((key) => items[key].toLowerCase().includes(searchItems))
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setSearchItems(e.target.value)}
      />
      <Table data={handleSearch(Users)} name="lfmnvdf" />
    </div>
  );
}
