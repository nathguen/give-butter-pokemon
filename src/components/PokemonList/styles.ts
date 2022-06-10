import styled from "styled-components";

export const PokemonListWrapper = styled.div`
  height: 50vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  border-radius: 4px;
`;

interface PokemonItemProps {
  isSelected: boolean;
}

export const PokemonItem = styled.div<PokemonItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 15px 20px;
  ${({ isSelected }) =>
    isSelected &&
    `
    background: grey;
    color: white;
   `}
`;

export const PokemonItemName = styled.div`
  margin-right: 10px;
`;

export const NoResultsWrapper = styled.div`
  padding: 15px 20px;
`;
