import { useLocation, useNavigate } from "react-router-dom";

export default function Home1() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <h2>Home page</h2>
      <p>Location : '{location.pathname}'</p>
      <button onClick={() => navigate("/Dashoard1")}>Go to Dashboard</button>
    </div>
  );
}
