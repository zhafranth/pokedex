import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@containers/Home"));

export default function Home() {
  return <HomePage />;
}
