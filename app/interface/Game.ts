import { StackNavigation } from "../types/props.types";
import { ICategory } from "./User";

export interface IGame {
    questions: IQuestion[];
    gameAction?: (allQuestions: IQuestion[], categories: ICategory[], amountQuesions: number, amountOptions: number, navigation: StackNavigation) => void;
}

export interface IQuestion {
    options: string[];
    category: string;
    text: string;
    answer: string;
    isAnswer: boolean;
}