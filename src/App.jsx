import { Route, Routes } from "react-router-dom";
import "./App.css";
import Info1 from "./components/Info1";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
