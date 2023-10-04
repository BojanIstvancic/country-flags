import { Helmet } from "react-helmet-async";
import Comparison from "../components/Comparison/Comparison";

const Compare = () => (
  <>
    <Helmet>
      <title>Pokemons | Compare</title>
      <meta
        name="description"
        content="Compare different pokemons, their stats and abilities."
      />
    </Helmet>
    <div className="p-4">
      <Comparison />
    </div>
  </>
);

export default Compare;
