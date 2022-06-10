import styled from "styled-components";

export const PokemonDetailsWrapper = styled.div`
  border: 2px solid black;
  border-radius: 4px;
  min-width: 50%;
  padding: 10px;
`;

export const InnerDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: large;
`;

export const DetailsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const DetailsList = styled.ul`
  max-height: 20vh;
  overflow-y: auto;
  min-width: 120px;
`;

export const DetailItem = styled.li`
  width: 100%;
`;

export const EvolutionsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EvolutionItem = styled.div``;
