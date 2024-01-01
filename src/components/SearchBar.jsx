import React from "react";
import { useState } from "react";

function Searchbar() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <div>
      <button onClick={toggleSearch} className="search-bar">
        Sök
      </button>
      {showSearch && (
        <input
          type="text"
          className="search-input"
          placeholder="sök i butiken"
        />
      )}
    </div>
  );
}

export default Searchbar;
