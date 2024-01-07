import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import LoginForm from "../components/LoginForm";
import Searchbar from "./Searchbar";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);

  const handleLoginSuccess = (userData) => {
    setIsModalOpen(false);
    setIsLoggedIn(true);
    setUser(userData);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="navbar-container">
      <div>
        <h2>Icon</h2>
        <h2>Amesterdam</h2>
      </div>

      <ul className="menu-items">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">SHOP</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faUser} onClick={toggleModal} />
        <FontAwesomeIcon icon={faSearch} onClick={toggleSearch} />
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

      {showSearch && <Searchbar />}

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
