import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { WrapperCard, Cover } from "./_components";
import { PokemonDetail, ResultPokemonProperties } from "api/pokedex.interface";
import { useDetailPokemon } from "api/pokedex.hooks";
import Image from "next/image";
import { useState } from "react";
import { CoverDefault } from "@constant/Default";

const Text = dynamic(() => import("@mui/material/Typography"));
const Tag = dynamic(() => import("@components/atoms/Type"));
const Modal = dynamic(() => import("@components/molecules/ModalDetailPokemon"));
const Skeleton = dynamic(() => import("@mui/material/Skeleton"));

interface CardPokedexProperties {
  data: ResultPokemonProperties;
}

const CardPokedex: React.FC<CardPokedexProperties> = ({ data }) => {
  const [isShowedModal, setIsShowedModal] = useState(false);

  const { name } = data;
  const { data: detailPokemon, isLoading } = useDetailPokemon(name);
  const { id, sprites, types } = detailPokemon || {};

  const toggleModal = () => {
    setIsShowedModal(!isShowedModal);
  };

  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        width="20rem"
        height="482px"
        style={{ margin: "auto" }}
      />
    );
  }

  return (
    <>
      <WrapperCard onClick={toggleModal}>
        <Cover>
          <Image
            src={sprites?.front_default || CoverDefault}
            alt={name}
            width="150"
            height="150"
          />
        </Cover>
        <Text
          color={Colors.grey50}
          paragraph
          fontSize="1.25rem"
          fontWeight="700"
          fontFamily="inherit"
        >
          #{id?.toString()?.padStart(3, "0")}
        </Text>
        <Text
          color={Colors.neutral}
          variant="h4"
          fontSize="2.5rem"
          fontWeight="700"
          fontFamily="inherit"
          style={{ textTransform: "capitalize" }}
        >
          {name}
        </Text>
        <div className="pokedex-type">
          {types?.map((item) => (
            <Tag value={item.type.name as string} key={`tag-${item.slot}`} />
          ))}
        </div>
      </WrapperCard>
      <Modal
        data={detailPokemon as PokemonDetail}
        open={isShowedModal}
        onClose={toggleModal}
      />
    </>
  );
};

export default CardPokedex;
