import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useAppDispatch } from "./redux/hooks";
import { getAddedPokemons } from "./redux/features/comparison/comparisonSlice";

const App = () => {
  const appRoutes = useRoutes(routes);
  const dispatch = useAppDispatch();

  dispatch(getAddedPokemons());

  return <Layout>{appRoutes}</Layout>;
};

export default App;
