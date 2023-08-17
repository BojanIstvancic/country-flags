import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Pokemons | Error</title>
      </Helmet>
      <div className="NotFound">
        <p>NotFound Page:</p>
      </div>
    </>
  );
}

export default NotFound;
