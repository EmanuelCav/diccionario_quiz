
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