import dynamic from "next/dynamic";
import { ModalProps } from "@mui/material/Modal";
import React from "react";
import { PokemonDetail } from "api/pokedex.interface";
import { Container, Cover } from "./_components";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";

const Type = dynamic(() => import("@components/atoms/Type"));
const Link = dynamic(() => import("@components/atoms/Button"));
const Modal = dynamic(() => import("@mui/material/Modal"));
const Button = dynamic(() => import("@mui/material/Button"));
const Box = dynamic(() => import("@mui/material/Box"));
const Text = dynamic(() => import("@mui/material/Typography"));

interface ModalDetailPokemonProperties extends Omit<ModalProps, "children"> {
  data: PokemonDetail;
}

const ModalDetailPokemon: React.FC<ModalDetailPokemonProperties> = (props) => {
  const { data, open, onClose } = props;
  const { name, sprites, weight, height, abilities, types, id } = data;
  const router = useRouter();

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Box display="flex" justifyContent={"end"}>
          <Button
            onClick={onClose as React.MouseEventHandler<HTMLButtonElement>}
          >
            <CloseIcon color="disabled" />
          </Button>
        </Box>
        <Box display="flex" height="100%" columnGap="1rem" position="relative">
          <Cover>
            <Image
              src={
                sprites?.front_default ||
                "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2480187d8bd9102.png"
              }
              width="250"
              height="250"
              alt={name}
            />
          </Cover>
          <Box flex="1">
            <Text
              variant="h2"
              fontWeight="700"
              fontSize="2.5rem"
              textTransform="capitalize"
              marginBottom="2rem"
            >
              {name}
            </Text>
            <Box>
              <Box display="flex" columnGap="2rem">
                <Box display="flex" columnGap="0.7rem">
                  <Text fontWeight="700" paragraph>
                    Weight :{" "}
                  </Text>
                  <Text paragraph>{weight}</Text>
                </Box>
                <Box display="flex" columnGap="0.7rem">
                  <Text fontWeight="700" paragraph>
                    Height :{" "}
                  </Text>
                  <Text paragraph>{height}</Text>
                </Box>
              </Box>
              <Box display="flex" columnGap="0.7rem">
                <Text fontWeight="700" paragraph>
                  Abilities :{" "}
                </Text>
                <ul style={{ margin: "0" }}>
                  {abilities?.map((item, index) => (
                    <li key={`${item.ability.name}-${index}`}>
                      <Text paragraph textTransform="capitalize">
                        {item.ability.name}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box display="flex" columnGap="0.7rem" flexWrap="wrap">
                <Text fontWeight="700" paragraph>
                  Type :{" "}
                </Text>
                {types?.map((item) => (
                  <Type
                    value={item.type.name}
                    key={`${item.slot}-${item.type.name}`}
                  />
                ))}
              </Box>
            </Box>
            <Link
              style={{ position: "absolute", bottom: "4rem" }}
              onClick={() => router.push(`/${id}`)}
            >
              More Detail
            </Link>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default ModalDetailPokemon;
