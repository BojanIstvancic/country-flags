import { Link, useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const appRoutes = useRoutes(routes);

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
      {appRoutes}
    </>
  );
}

export default App;
