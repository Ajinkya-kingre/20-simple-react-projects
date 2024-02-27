import React from "react";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import Suggestion from "./suggestion";
import data from "../accordian/data";

export default function SearchAutocomplelte() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUSers] = useState(false);

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUSers([]);
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUSers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setErr(null);
      }
    } catch (error) {
      setErr(false);
      console.log(error);
      setErr(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data!!</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          type="text"
          placeholder="Search Users..."
          onChange={handleChange}
        />
      )}
      {showDropdown && (
        <Suggestion handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
