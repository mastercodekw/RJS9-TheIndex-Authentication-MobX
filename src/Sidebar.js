import React from "react";
import { NavLink } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";
import { observer } from "mobx-react";
import authStore from "./stores/AuthStore";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>
        <h3 className="menu-item">__</h3>
        {authStore.user ? (
          <h4 className="menu-item">
            <div onClick={authStore.logout}>Sign Out</div>
          </h4>
        ) : (
          <div>
            <h4 className="menu-item">
              <NavLink to="/signup">Sign Up</NavLink>
            </h4>
            <h4 className="menu-item">
              <NavLink to="/login">Login</NavLink>
            </h4>
          </div>
        )}
      </section>
    </div>
  );
};

export default observer(Sidebar);
