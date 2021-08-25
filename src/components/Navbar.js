import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Shop me
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">My cart</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
          <li
            style={{
              color: "yellow",

              marginLeft: -20,
              marginBottom: -30,
              marginTop: -20,
            }}
          >
            {props.totalQuantity}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    totalQuantity: state.totalQuantity,
  };
};
export default connect(mapStateToProps)(Navbar);
