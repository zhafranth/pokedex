import dynamic from "next/dynamic";
import Logo from "assets/logo.png";
import Image from "next/image";
import { Wrapper, Link } from "./_components";
import { useRouter } from "next/router";

const Container = dynamic(() => import("@mui/material/Container"));

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Container>
      <Wrapper>
        <Image src={Logo} alt="pokedex logo" />
        <Link href="/" active={pathname !== "/pokemon-type"}>
          Home
        </Link>
        <Link href="/pokemon-type" active={pathname === "/pokemon-type"}>
          Type
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
