import React, { useState } from 'react';
import { Card, CardProps } from 'components/Card';
import styled from 'styled-components';

export interface GridProps {
    defaultRows?: number;
    defaultColumns?: number;
    data: CardProps[];
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
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
`;

export const CardGrid: React.FC<GridProps> = ({ data, defaultColumns = 3, defaultRows = 3 }) => {
    const [rows, setRows] = useState(defaultRows);
    const numberOfCards = rows * defaultColumns;
    return (
        <>
            <StyledGrid>
                {data.slice(0, numberOfCards).map((item) => (
                    <Card {...item} />
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
