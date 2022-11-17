import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Colors } from "@constant/Color";

const queryClient = new QueryClient();
const TopNavbar = dynamic(() => import("components/molecules/TopNavbar"));
const Navbar = dynamic(() => import("components/molecules/Navbar"));

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    allVariants: {
      color: Colors.neutral,
      margin: 0,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <TopNavbar />
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
