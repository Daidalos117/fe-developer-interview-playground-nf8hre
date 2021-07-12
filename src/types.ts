
interface ChallengeCard {
    id: number;
    description: string;
    title: string;
}

interface ChallengeImage {
    id: number;
    image: string;
}

export interface ChallengeApiResponse {
    data: ChallengeCard[];
    images: ChallengeImage[];
}
