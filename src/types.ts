
export interface ChallengeCard extends ChallengeArticle {
    imageUrl: string;
}

export interface ChallengeArticle {
    id: number;
    description: string;
    title: string;
}

export interface ChallengeImage {
    id: number;
    image: string;
}

export interface ChallengeApiResponse {
    data: ChallengeArticle[];
    images: ChallengeImage[];
}
