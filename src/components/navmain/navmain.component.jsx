import React from "react";
import {
  NavLink
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import "./navmain.scss";

function NavMain(props) {
  function handleLogout(e) {
    e.preventDefault()
    console.log("loout!!")
  }

  return (
    <Nav
      className="nav-main"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <NavLink activeClassName="is-active" to="/games">Games</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink activeClassName="is-active" to="/fields">Fields</NavLink>
      </Nav.Item>
    </Nav>
  )
}

export {
  NavMain
}