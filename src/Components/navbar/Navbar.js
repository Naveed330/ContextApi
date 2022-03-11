import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main_navbar_class">
          <Link to="/">
            <h4 className="nav_text">Crud With Context API</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <Link className="Navbar_link_class" to="/AddUsers">
                ADD Users
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
