import React from 'react';
import {Card, CardProps} from "components/Card";

interface Props {
    defaultRows: number;
    defaultColumns: number;
    data: CardProps[];
}

export const CardGrid: React.FC<Props> = ({data, defaultColumns, defaultRows}) => {

    return (<>{data.map(item => <Card {...item} />)}</>);
}
