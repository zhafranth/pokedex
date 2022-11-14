import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const queryClient = new QueryClient();
const TopNavbar = dynamic(() => import("components/molecules/TopNavbar"));
const Navbar = dynamic(() => import("components/molecules/Navbar"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TopNavbar />
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
