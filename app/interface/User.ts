import { TextOptions } from "../types/key.types";

export interface IUser {
    amountOptions: TextOptions;
    amountQuestions: number;
    categories: ICategory[];
    helps: number;
    changeOptions: (optionsData: IOptions) => void;
    changeCategory: (category: ICategory) => void;
    countQuestion: (category: string) => void;
    correctQuestion: (category: string) => void;
    changeHelps: (number: number) => void;
}

export interface ICategory {
    category: string;
    corrects: number;
    questions: number;
    isSelect: boolean;
}

export interface IOptions {
    amountOptions: TextOptions;
    amountQuestions: number;
}