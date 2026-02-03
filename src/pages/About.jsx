import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  function gotoHome() {
    navigate("/");
  }
  return (
    <div>
      <h2>About page 🌸</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        tenetur amet dolorem. Laboriosam totam nam eius expedita obcaecati dolor
        labore est ex, ullam atque praesentium eligendi repellat ea quas nobis!
      </p>
      <button onClick={gotoHome}>go to Home</button>
    </div>
  );
}
