import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Pokemons | Home</title>
        <meta
          name="description"
          content="All the Pokémon data you'll ever need in one place"
        />
      </Helmet>
      <div className="Home">
        <p>Home Page</p>
      </div>
    </>
  );
}

export default Home;
