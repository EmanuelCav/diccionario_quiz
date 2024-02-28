import { StackNavigation } from "../types/props.types";
import { ICategory } from "./User";

export interface IGame {
    questions: IQuestion[];
    generateGame: (question: IQuestion) => void;
}

export interface IQuestion {
    options: string[];
    category: string;
    text: string;
    answer: string;
    isAnswer: boolean;
}