import React, { useState } from "react";
import { Card } from "components/Card";
import { ChallengeCard } from "types";
import { StyledGrid, StyledCenter, StyledButton } from "components/styled";

export interface GridProps {
  defaultRows?: number;
  defaultColumns?: number;
  data: ChallengeCard[];
  search?: string;
}

export const CardGrid: React.FC<GridProps> = ({
  data,
  defaultColumns = 3,
  defaultRows = 3,
  search = 3,
}) => {
  const [rows, setRows] = useState(defaultRows);
  const [hiddenCards, setHiddenCards] = useState<number[]>([]);
  const numberOfCards = rows * defaultColumns;
  const filterFunction = (card: ChallengeCard) => {
    const hidden = !hiddenCards.includes(card.id);
    if (!hidden) return false;
    return search
      ? card.title.match(new RegExp(String(search), "i")) ||
          card.description.match(new RegExp(String(search), "i"))
      : true;
  };
  const filtered = data.filter(filterFunction);
  const slicedData = data.slice(0, numberOfCards);
  const mutatedData = slicedData.filter(filterFunction);

  return (
    <>
      <StyledGrid columns={defaultColumns}>
        {mutatedData.map(({ id, ...item }) => (
          <Card
            {...item}
            onHideClick={() => setHiddenCards((cards) => [...cards, id])}
            key={id}
          />
        ))}
      </StyledGrid>
      <StyledCenter>
        {numberOfCards < filtered.length && (
          <StyledButton onClick={() => setRows(rows + 3)}>
            Load more
          </StyledButton>
        )}

        {filtered.length === 0 && <>No cards to show :(</>}
      </StyledCenter>
    </>
  );
};
