import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <h3>Profile page</h3>
      <p>location : {location.pathname}</p>
      <button onClick={() => navigate("dashboard")}>Go to dashboard</button>
    </div>
  );
}
