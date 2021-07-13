import React, { useMemo } from 'react';
import useSWR from 'swr';
import { fetcher } from 'helpers';
import { ChallengeApiResponse, ChallengeCard } from 'types';
import {CardGrid } from 'components/CardGrid';

interface Props {}


export const ChallengeCards: React.FC<Props> = (props) => {
    const { data, error } = useSWR<ChallengeApiResponse>('https://dev.ntvr.co/react-challenge-api/data.json', fetcher);

    const condensedData: ChallengeCard[] = useMemo(() => {
        if (!data) return [];
        const { images, data: cardData } = data;

        const imagesById = images.reduce((acc: { [id: string]: string }, value) => {
            acc[value.id] = value.image;
            return acc;
        }, {});

        return cardData.map((card) => ({ ...card, imageUrl: imagesById[card.id] }));
    }, [data]);

    if (!data) {
        return <>Loading...</>;
    }

    return <><CardGrid data={condensedData}  /> </>;
};
