import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navBar">
        <ul className="nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addTask">Add Task</Link>
          </li>
          <li>
            <Link to="/completedTask">Completed Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
