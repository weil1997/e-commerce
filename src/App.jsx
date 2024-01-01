import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <div>
      <Navbar toggleSearch={toggleSearch} />
      {showSearch && <Searchbar />}
    </div>
  );
}

export default App;
