import { Pokemon } from "../../types";
import {
  NoResultsWrapper,
  PokemonItem,
  PokemonItemName,
  PokemonListWrapper,
} from "./styles";

interface PokemonListProps {
  list: Pokemon.Summary[];
  onSelectPokemon: (name: string) => void;
  selectedPokemon: string;
}

export const PokemonList = ({
  list,
  onSelectPokemon,
  selectedPokemon,
}: PokemonListProps) => {
  if (list.length === 0) {
    return (
      <PokemonListWrapper>
        <NoResultsWrapper>No Results Found</NoResultsWrapper>
      </PokemonListWrapper>
    );
  }

  return (
    <PokemonListWrapper>
      {list.map((monster) => {
        return (
          <PokemonItem
            key={monster.name}
            isSelected={monster.name === selectedPokemon}
          >
            <PokemonItemName>{monster.name}</PokemonItemName>
            <button onClick={() => onSelectPokemon(monster.name)}>
              Get Details
            </button>
          </PokemonItem>
        );
      })}
    </PokemonListWrapper>
  );
};
