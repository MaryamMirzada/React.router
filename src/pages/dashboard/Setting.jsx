import { useNavigate } from "react-router-dom";

export default function Setting() {
  const navigate = useNavigate();
  const gotoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h4>Setting page</h4>
      <button onClick={gotoBack}>GO to Home</button>
    </div>
  );
}
