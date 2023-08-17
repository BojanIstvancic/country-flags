import { Link, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Details from "./Details";
import NotFound from "./NotFound";

function App() {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":id",
          element: <Details />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/1"}>Details</Link>
          </li>
        </ul>
      </nav>
      {element}
    </>
  );
}

export default App;
