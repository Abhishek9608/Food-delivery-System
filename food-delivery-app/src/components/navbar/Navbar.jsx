import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
      <Link class="navbar-brand" to="/">
        Romato
      </Link>
      <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div class="navbar-nav mr-5">
          <Link class="nav-item nav-link active mx-3 " to="/">
            Login <span class="sr-only">(current)</span>
          </Link>
          <Link class="nav-item nav-link mx-3 " to="/">
            Sign Up
          </Link>

          <Link class="nav-item nav-link mx-3" to="/">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </Link>
          <div className="bg-info" style={{ width: "20px", height: "20px", borderRadius: "50%", marginLeft: "-30px", paddingLeft: "5px", color: "white" }}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
