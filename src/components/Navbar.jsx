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

function Navbar({ toggleSearch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (userData) => {
    setIsModalOpen(false);
    setIsLoggedIn(true);
    setUser(userData);
  };

  console.log("användaren är inloggad");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="navbar-container">
      <h1>ICON. Amsterdam</h1>

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
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

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
