import { Helmet } from "react-helmet-async";

function FallBack() {
  return (
    <>
      <Helmet>
        <title>Pokemons | Fallback</title>
      </Helmet>
      <div className="FallBack">
        <p>FallBack Page:</p>
      </div>
    </>
  );
}

export default FallBack;
