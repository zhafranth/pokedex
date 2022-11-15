import dynamic from "next/dynamic";
import { useRef } from "react";

const Hero = dynamic(() => import("@components/organisms/hero"));
const PokedexList = dynamic(() => import("@components/organisms/pokedexList"));

const Home = () => {
  const pokedexRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero ref={pokedexRef} />
      <PokedexList ref={pokedexRef} />
    </>
  );
};

export default Home;
