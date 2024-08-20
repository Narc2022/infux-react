import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";

const Navbar = () => {
  const [navD, setNavD] = useState({ d1: false });
  return (
    <div
      style={{ position: "sticky", top: "0px", background: "red" }}
      className="container"
    >
      <div className="border-bottom d-flex">
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic"
            className="text-decoration-none text-white font-weight-bold"
            onClick={() => {
              setNavD({ ...navD, d1: !navD.d1 });
            }}
          >
            PLACEHOLDER TITLE
          </Dropdown.Toggle>

          <Dropdown.Menu show={navD.d1}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic"
            className="text-decoration-none text-white font-weight-bold"
            onClick={() => {
              setNavD({ ...navD, d2: !navD.d2 });
            }}
          >
            PLACEHOLDER TITLE
          </Dropdown.Toggle>

          <Dropdown.Menu show={navD.d2}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic"
            className="text-decoration-none text-white font-weight-bold"
            onClick={() => {
              setNavD({ ...navD, d3: !navD.d3 });
            }}
          >
            PLACEHOLDER TITLE
          </Dropdown.Toggle>

          <Dropdown.Menu show={navD.d3}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
