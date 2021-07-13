import React, { useState } from 'react';
import { Card } from 'components/Card';
import styled from 'styled-components';
import { ChallengeCard } from 'types';

export interface GridProps {
    defaultRows?: number;
    defaultColumns?: number;
    data: ChallengeCard[];
}

const StyledGrid = styled.div<{ columns: number | undefined }>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns || 3}, 300px);
    grid-gap: 20px;
`;

export const StyledCenter = styled.div`
    text-align: center;
    margin: 60px;
`;

export const StyledButton = styled.button`
    font-size: 20px;
    background-color: #01937c;
    color: #faf1e6;
    border-radius: 0;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
`;

export const CardGrid: React.FC<GridProps> = ({ data, defaultColumns = 3, defaultRows = 3 }) => {
    const [rows, setRows] = useState(defaultRows);
    const [hiddenCards, setHiddenCards] = useState<number[]>([]);
    const numberOfCards = rows * defaultColumns;
    const filteredData = data.slice(0, numberOfCards).filter((card) => !hiddenCards.includes(card.id));

    return (
        <>
            <StyledGrid columns={defaultColumns}>
                {filteredData.map(({ id, ...item }) => (
                    <Card {...item} onHideClick={() => setHiddenCards((cards) => [...cards, id])} key={id} />
                ))}
            </StyledGrid>
            <StyledCenter>
                {numberOfCards < data.length && (
                    <StyledButton onClick={() => setRows(rows + 3)}>Load more</StyledButton>
                )}
            </StyledCenter>
        </>
    );
};
