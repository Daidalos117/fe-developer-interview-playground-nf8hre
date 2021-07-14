import React, { useMemo, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from 'helpers';
import { ChallengeApiResponse, ChallengeCard } from 'types';
import { CardGrid } from 'components/CardGrid';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

interface Props {}

export const StyledSearch = styled.div`
    input {
        padding: 10px 20px;
        border: 2px solid #e99497;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 20px;
        width: 100%;
        box-sizing: border-box;
    }
`;

export const ChallengeCards: React.FC<Props> = (props) => {
    const { data, error } = useSWR<ChallengeApiResponse>('https://dev.ntvr.co/react-challenge-api/data.json', fetcher);
    const [searchValue, setSearchValue] = useState('');

    const condensedData: ChallengeCard[] = useMemo(() => {
        if (!data) return [];
        const { images, data: cardData } = data;
        if (!images) return [];
        const imagesById = images.reduce((acc: { [id: string]: string }, value) => {
            acc[value.id] = value.image;
            return acc;
        }, {});

        return cardData.map((card) => ({ ...card, imageUrl: imagesById[card.id] }));
    }, [data]);

    if (!data) {
        return <>Loading...</>;
    }

    if(error) {
        return <>Sorry, error happened.</>;
    }

    return (
        <>
            <StyledSearch>
                <DebounceInput
                    minLength={2}
                    debounceTimeout={300}
                    placeholder="Type your search query here..."
                    onChange={(event) => setSearchValue(event.target.value)}
                />
            </StyledSearch>
            <CardGrid data={condensedData} search={searchValue} />{' '}
        </>
    );
};
