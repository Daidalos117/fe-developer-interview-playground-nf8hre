import styled from 'styled-components';

export const StyledClose = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e99497;
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    opacity: 0;
    animation: 0.2s opacity;
`;

export const StyledCard = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    position: relative;

    &:hover ${StyledClose} {
        visibility: visible;
        opacity: 1;
    }
`;

export const StyledImage = styled.div`
    width: 300px;
    height: 180px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledContent = styled.div`
    padding: 30px 20px;
`;

export const StyledHeading = styled.h3`
    font-size: 25px;
    margin-top: 0;
`;

export const StyledDescription = styled.p`
    margin: 0;
`;


export const StyledGrid = styled.div<{ columns: number | undefined }>`
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
