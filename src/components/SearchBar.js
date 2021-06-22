import React from "react";

const SearchBar = (props) => {
  const handleForm = props.handleForm;
  const handleSubmit = props.handleSubmit;

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Books" onChange={handleForm} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
