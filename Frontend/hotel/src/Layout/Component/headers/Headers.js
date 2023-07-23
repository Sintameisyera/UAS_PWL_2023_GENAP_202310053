import React from "react";
import { NavLink } from "react-router-dom";
import "../headers/Headers.css";

export default function Headers() {
  const menuList = [
    { id: 1, name: "Home", path: "/home"},
    { id: 2, name: "Rooms", path: "/rooms"},
    { id: 3, name: "Promo", path: "/promo" },
  ];
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary batas">
      <div class="container-fluid bar">
        <a class="navbar-brand judul" href="/signup">
          <p className="atas">ELMEERA</p>
          <p className="bawah">Hotel</p>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse semua" id="navbarCollapse">
          <div className="d-flex w-100 justify-content-end">
            <div id="main-nav" class="mainnav">
              <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                {menuList.map((v, index) => (
                  <li className="nav-item me-1 " key={index}>
                    <NavLink
                      className="nav-link text-hover-success px-3 clrr"
                      to={v.path}
                    >
                      <i className={"bi me-2 fs-5  " + v.icon}></i>
                      {v.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
