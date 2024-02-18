export interface IUser {
    amountOptions: number;
    amountQuestions: number;
    categories: ICategory[];
    showLetters: number;
    showOptions: number;
}

export interface ICategory {
    category: string;
    corrects: 0;
    questions: 0;
    isSelect: boolean;
}