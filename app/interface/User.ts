import { TextOptions } from "../types/key.types";

export interface IUser {
    amountOptions: TextOptions;
    amountQuestions: number;
    categories: ICategory[];
    showLetters: number;
    showOptions: number;
    changeOptions: (optionsData: IOptions) => void;
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