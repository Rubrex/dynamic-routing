import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Blog Posts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
