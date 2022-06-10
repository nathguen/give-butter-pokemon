import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { fetchAllPokemon } from "./api";
import { PokemonDetails } from "./components/PokemonDetails";
import { PokemonList } from "./components/PokemonList";
import { ResultsWrapper } from "./styles";
import { Pokemon } from "./types";

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon.Summary[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const refreshPokemonList = () => {
    const fetchPokemonList = async () => {
      const { results: pokemonList } = await fetchAllPokemon();

      setPokemonList(pokemonList);
    };

    fetchPokemonList().then(() => {
      /** noop **/
    });
  };

  useEffect(() => {
    // fetch all the pokemon to start
    refreshPokemonList();
  }, []);

  const filteredPokemonList = useMemo(() => {
    if (searchValue === "") {
      return pokemonList;
    }

    const loweredSearchValue = searchValue.toLowerCase();
    return pokemonList.filter((p) =>
      p.name.toLowerCase().includes(loweredSearchValue)
    );
  }, [searchValue, pokemonList]);

  useEffect(() => {
    // refresh list if a given pokemon isn't found
    if (filteredPokemonList.length === 0) {
      refreshPokemonList();
    }
  }, [searchValue]);

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <div className={"pokedex__container"}>
      <div className={"pokedex__search-input"}>
        <input
          value={searchValue}
          onChange={onSearchValueChange}
          placeholder={"Search Pokemon"}
        />
      </div>

      <ResultsWrapper>
        <PokemonList
          list={filteredPokemonList}
          onSelectPokemon={(pokemonName) => setSelectedPokemon(pokemonName)}
          selectedPokemon={selectedPokemon}
        />

        <PokemonDetails pokemonName={selectedPokemon} />
      </ResultsWrapper>
    </div>
  );
}

export default App;
