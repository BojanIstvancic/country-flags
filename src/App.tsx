import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  const appRoutes = useRoutes(routes);

  return <Layout>{appRoutes}</Layout>;
};

export default App;
