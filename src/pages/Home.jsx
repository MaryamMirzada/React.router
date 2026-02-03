import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("./About");
  };
  return (
    <div>
      <h2>Home page 🏠</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        suscipit ut ratione repudiandae at dolorem nulla eligendi commodi sint
        animi hic nemo labore, quo dolore cum earum laboriosam. Possimus, sequi.
      </p>
      <button onClick={gotoAbout}>go to about</button>
    </div>
  );
}
