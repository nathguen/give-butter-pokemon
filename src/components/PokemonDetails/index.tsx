import { useEffect, useState } from "react";
import { fetchPokemonDetailsByName } from "../../api";
import { Pokemon } from "../../types";
import {
  DetailItem,
  DetailsList,
  DetailsSectionWrapper,
  EvolutionItem,
  EvolutionsList,
  InnerDetailsWrapper,
  PokemonDetailsWrapper,
  SectionTitle,
} from "./styles";

interface PokemonDetailsProps {
  pokemonName: string;
}

type LoadingState = "loading" | "loaded" | "init";

export const PokemonDetails = ({ pokemonName }: PokemonDetailsProps) => {
  const [loadingDetails, setLoadingDetails] = useState<LoadingState>("init");
  const [details, setDetails] = useState<Pokemon.Details>();

  const fetchPokemonDetails = async () => {
    setLoadingDetails("loading");
    const details = (await fetchPokemonDetailsByName(
      pokemonName
    )) as Pokemon.Details;
    setDetails(details);
    setLoadingDetails("loaded");
  };

  /**
   * load pokemon details
   */
  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    fetchPokemonDetails();
  }, [pokemonName]);

  /**
   * only show if pokemon is selected
   */
  if (!pokemonName) {
    return null;
  }

  /**
   * show loading state if loading
   */
  if (loadingDetails !== "loaded") {
    return <div>...loading {pokemonName} details...</div>;
  }

  if (!details) {
    return <div>Details not found</div>;
  }

  return (
    <PokemonDetailsWrapper>
      <SectionTitle>{details.name}</SectionTitle>

      <InnerDetailsWrapper>
        <DetailsSectionWrapper>
          <SectionTitle>Types</SectionTitle>
          <DetailsList>
            {details.types.map((t) => (
              <DetailItem key={t.type.name}>{t.type.name}</DetailItem>
            ))}
          </DetailsList>
        </DetailsSectionWrapper>

        <DetailsSectionWrapper>
          <SectionTitle>Moves</SectionTitle>
          <DetailsList>
            {details.moves.map((m) => (
              <DetailItem key={m.move.name}>{m.move.name}</DetailItem>
            ))}
          </DetailsList>
        </DetailsSectionWrapper>
      </InnerDetailsWrapper>

      <SectionTitle>Evolutions</SectionTitle>
      <EvolutionsList>
        {details.forms.map((f) => (
          <EvolutionItem key={f.name}>{f.name}</EvolutionItem>
        ))}
      </EvolutionsList>
    </PokemonDetailsWrapper>
  );
};
