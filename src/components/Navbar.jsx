import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
  };
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>{" "}
      ||{" "}
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        About
      </NavLink>
      <NavLink
        to="dashboard"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {" "}
        || Dashboard{" "}
      </NavLink>
      <Outlet />
    </div>
  );
}
