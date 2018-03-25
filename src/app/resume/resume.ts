export interface IResume {
    id: number;
    author: string;
    email: string;
    tags?: string[];
    dateAdded: string;
    description: string;
    starRating: number;
    pdfUrl: string;
}