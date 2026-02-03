import { useParams } from "react-router-dom";

export default function Info1() {
  const name = useParams();
  return (
    <div>
      <h2>Hello dear : {name}</h2>
    </div>
  );
}
