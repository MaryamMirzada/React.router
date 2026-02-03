import { Outlet } from "react-router-dom";

export default function Dashboard1() {
  return (
    <div>
      <h2>Dashboard page</h2>
      <Outlet />
    </div>
  );
}
