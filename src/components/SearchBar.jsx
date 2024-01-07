import React from "react";
import { useState } from "react";

function Searchbar({ showSearch, toggleSearch }) {
  return (
    <div>
      {showSearch && (
        <input
          type="text"
          className="search-input"
          placeholder="sök i butiken"
        />
      )}
      <button onClick={toggleSearch} className="Search-bar">
        Sök
      </button>
    </div>
  );
}

export default Searchbar;
