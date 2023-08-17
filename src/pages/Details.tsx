import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  return (
    <div className="Details">
      <p>Details Page: {id}</p>
    </div>
  );
}

export default Details;
