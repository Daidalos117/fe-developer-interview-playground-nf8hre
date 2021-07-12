import React, { useMemo } from 'react';
import styled from 'styled-components';

export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const StyledCard = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const StyledImage = styled.div`
    width: 300px;
    height: 180px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const StyledContent = styled.div`
    padding: 35px 20px;
    
`;

const StyledHeading = styled.h3`
    font-size: 25px;
    margin-top: 0;
`;

const StyledDescription = styled.p`
margin: 0;
`;

export const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    const trimmedDescription = useMemo(() => (description.length > 150 ? description.substring(0, 150) : description), [
        description,
    ]);

    return (
        <StyledCard>
            <StyledImage>
                <img src={imageUrl} alt={title} />
            </StyledImage>
            <StyledContent>
                <StyledHeading>{title}</StyledHeading>
                <StyledDescription>{trimmedDescription}</StyledDescription>
            </StyledContent>
        </StyledCard>
    );
};
