import React from "react";
import "../../css/header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-logo">FreebeeHub</div>
        <div className="input-div-lg">
          <input
            type="text"
            className="header-search-lg"
            placeholder="Search Here..."
          />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="user-details-lg">
        <div className="location">
          <KeyboardArrowDownIcon
            className="location-icon"
            style={{ marginBottom: "3px" }}
          />{" "}
          Guntur
        </div>
        <div class="login-button">Login</div>
      </div>
    </div>
  );
}

export default Header;
