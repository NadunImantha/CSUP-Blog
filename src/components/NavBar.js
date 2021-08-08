import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";

function NavBar() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img src={Logo} alt="Logo" />
          <Link to="/">CSUP-BLOG</Link>
        </div>

        <div className="header-right">
          <Link to="/">Home</Link>
          <Link to="/newPost">
            <button>New Post</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
