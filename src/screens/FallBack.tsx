import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading/Loading";

const FallBack = () => (
  <>
    <Helmet>
      <title>Pokemons | Fallback</title>
    </Helmet>
    <div className="FallBack">
      <p>Loading Routes</p>
      <Loading />
    </div>
  </>
);

export default FallBack;
