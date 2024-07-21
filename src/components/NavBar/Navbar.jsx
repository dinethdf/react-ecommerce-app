import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1 className="navbar_heading">Cart Wish</h1>

        <form className="navbar_heading">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Searchf{" "}
          </button>
        </form>
      </div>

      <div>Nav Bar</div>
    </nav>
  );
};

export default Navbar;
