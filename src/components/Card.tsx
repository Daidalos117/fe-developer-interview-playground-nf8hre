import React from 'react';
import styled from 'styled-components';

export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const StyledCard = styled.div``

export const Card: React.FC<CardProps> = ({title, description, imageUrl}) => {

    return (<StyledCard></StyledCard>);
}
