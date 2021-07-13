import React, { useMemo } from 'react';
import {
    StyledCard,
    StyledHeading,
    StyledContent,
    StyledDescription,
    StyledImage,
    StyledClose,
} from 'components/styled';
import { ChallengeCard } from 'types';
import { StyledButton } from 'components/styled';

export type CardProps = Omit<ChallengeCard, 'id'> & { onHideClick: Function };

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, onHideClick }) => {
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

            <StyledClose>
                <StyledButton onClick={() => onHideClick()}>Hide</StyledButton>
            </StyledClose>
        </StyledCard>
    );
};
