import { Route, Routes } from "react-router-dom";
import "./App.css";
import Info1 from "./components/Info1";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Setting from "./pages/dashboard/Setting";
import User from "./pages/dashboard/User";
import Dashboard1 from "./pages/Dashboard1";
import Home1 from "./pages/Home1";
import Profile from "./pages/Profile";
import Navbar1 from "./components/Navbar1";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="user" element={<User />}></Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
      </Routes>
      <hr />
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="profle" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard1 />} />
      </Routes>
    </div>
  );
}

export default App;
