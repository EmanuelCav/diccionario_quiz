import { TextOptions } from "../types/key.types";

export interface IUser {
    amountQuestions: number;
    categories: ICategory[];
    helps: number;
    changeOptions?: (optionsData: IOptions) => void;
    changeCategory?: (category: ICategory) => void;
    countQuestion?: (category: string) => void;
    correctQuestion?: (category: string) => void;
    changeHelps?: (number: number) => void;
    userStorage?: (storage: any) => void;
}

export interface ICategory {
    category: string;
}

export interface IOptions {
    amountOptions: TextOptions;
    amountQuestions: number;
}