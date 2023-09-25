import { Helmet } from "react-helmet-async";
import List from "../components/List/List";

const Home = () => (
  <>
    <Helmet>
      <title>Pokemons | Home</title>
      <meta
        name="description"
        content="All the Pokemon data you'll ever need in one place"
      />
    </Helmet>
    <div className="p-4">
      <List />
    </div>
  </>
);

export default Home;
