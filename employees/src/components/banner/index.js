import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Banner() {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center">
      <h1 className="header d-flex justify-content-center">
        Employee Directory
      </h1>
    </nav>
  );
}

export default Banner;
