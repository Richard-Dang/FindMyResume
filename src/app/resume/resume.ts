export interface IResume {
    id: number;
    author: string;
    email: string;
    tags?: string[];
    createdAt: string;
    description: string;
    starRating: number;
    pdfUrl: string;
}