import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <h1 className="header__title">Expensify</h1>
      <div className="header__content">
        <NavLink to="/dashboard" activeClassName="is-active" className="header__title_link">
          Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active" className="header__title_link">
          Create Expense
        </NavLink>
          <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
      </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
