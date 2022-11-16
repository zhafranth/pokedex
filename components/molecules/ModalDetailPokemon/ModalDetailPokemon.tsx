import dynamic from "next/dynamic";
import { ModalProps } from "@mui/material/Modal";
import React from "react";
import { PokemonDetail } from "api/pokedex.interface";
import { Container } from "./_components";
import CloseIcon from "@mui/icons-material/Close";

const Modal = dynamic(() => import("@mui/material/Modal"));
const Button = dynamic(() => import("@mui/material/Button"));
const Box = dynamic(() => import("@mui/material/Box"));
const PokemonInfo = dynamic(() => import("@components/organisms/pokemonInfo"));

interface ModalDetailPokemonProperties extends Omit<ModalProps, "children"> {
  data: PokemonDetail;
}

const ModalDetailPokemon: React.FC<ModalDetailPokemonProperties> = (props) => {
  const { data, open, onClose } = props;

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
        <PokemonInfo loading={false} data={data} />
      </Container>
    </Modal>
  );
};

export default ModalDetailPokemon;
