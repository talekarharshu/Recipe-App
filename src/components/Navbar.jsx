import React, { useState } from "react";
import Button from "./Button";
import logo from "/public/Logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navgate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navgate(`/Search/${input}`);
  };

  const navigate = useNavigate();

  const handleCuisineChange = (e) => {
    const selectedCuisine = e.target.value;
    if (selectedCuisine !== "") {
      navigate(`/Category/${selectedCuisine}`);
    }
  };

  return (
    <div className="nav">
      <div className="left">
        <img src={logo} alt="Yumbook Logo" />
        <Link to="/" className="link">
          <h1>Harshu's Yumbook</h1>
        </Link>
      </div>

      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Find Your Favourite Dish..."
          />
        </form>
      </div>

      <div className="right">
        <label htmlFor="cuisine">Cuisine:</label>
        <select
          id="cuisine"
          name="cuisine"
          className="dropdown"
          onChange={handleCuisineChange}
        >
          <option value="">-- Select --</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="American">American</option>
          <option value="Japanese">Japanese</option>
          <option value="British">British</option>
        </select>
      </div>

      <div className="mode">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
