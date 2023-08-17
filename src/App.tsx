import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Details from "./Details";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/details"}>Details</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
