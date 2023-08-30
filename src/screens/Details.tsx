import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>Pokemons | Details</title>
      </Helmet>
      <div className="Details">
        <p>Details Page: {id}</p>
      </div>
    </>
  );
};

export default Details;
