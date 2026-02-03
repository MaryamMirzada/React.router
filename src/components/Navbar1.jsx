import { NavLink } from "react-router-dom";

export default function Navbar1() {
  return (
    <div>
      <NavLink to="/">Home</NavLink> | {""}
      <NavLink to="profile">Profile</NavLink> | {""}
      <NavLink to="dashbaord">Dashboard</NavLink> | {""}
    </div>
  );
}
