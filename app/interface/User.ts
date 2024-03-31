import { GameType } from "../types/key.types";

export interface IUser {
    sounds: boolean;
    definitions: IStatistic;
    antonyms: IStatistic;
    synonyms: IStatistic;
    amountQuestions: number;
    helps: number;
    changeOptions?: (optionsData: IOptions) => void;
    countDefinitions?: () => void;
    correctDefinitions?: () => void;
    countSynonyms?: () => void;
    correctSynonyms?: () => void;
    countAntonyms?: () => void;
    correctAntonyms?: () => void;
    changeHelps?: (number: number) => void;
    changeSounds?: () => void;
    userStorage?: (storage: any) => void;
}

export interface IStatistic {
    name: GameType;
    amount: number;
    corrects: number;
}

export interface ICategory {
    category: string;
}

export interface IOptions {
    amountQuestions: number;
}