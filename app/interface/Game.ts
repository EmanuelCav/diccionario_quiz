
export interface IGame {
    questions: IQuestion[];
    generateGame: (question: IQuestion) => void;
    emptyQuestions: () => void;
}

export interface IQuestion {
    options: string[];
    category: string;
    text: string;
    answer: string;
    isAnswer: boolean;
}

export interface IResponse {
    loading: boolean;
    changeLoading: (response: boolean) => void;
}