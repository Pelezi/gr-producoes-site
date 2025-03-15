import api from './api';

export interface Video {
    id: number;
    fileName: string;
    path: string;
    title: string;
    orientation: string;
    page: string;
}