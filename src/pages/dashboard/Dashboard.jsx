import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <NavLink to="user">User</NavLink> ||
      <NavLink to="setting">Setting</NavLink>
      <Outlet />
    </div>
  );
}
