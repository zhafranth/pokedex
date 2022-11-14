import dynamic from "next/dynamic";

const Button = dynamic(() => import("components/atoms/Button"));

const Home = () => {
  return (
    <div>
      <Button>Check PokèDex</Button>
    </div>
  );
};

export default Home;
