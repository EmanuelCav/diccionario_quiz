import { SetStateAction } from "react";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from "@react-navigation/native";

import { ICategory, IOptions } from '../interface/User';
import { TextOptions } from "./key.types";
import { IQuestion } from "../interface/Game";

type Routes = {
    Home: undefined;
    Playing: undefined;
    Options: undefined;
    Categories: {
        isCategory: boolean;
    };
    Statistics: undefined;
}

export type StackNavigation = NativeStackNavigationProp<Routes>;

export type CategoriesRouteType = RouteProp<Routes, 'Categories'>

export type ButtonMenuPropsType = {
    text: string;
    func: () => void;
}

export type ButtonAcceptPropsType = {
    text: string;
    func: () => void;
    disabled: boolean;
}

export type CategoriesPropsType = {
    navigation: StackNavigation;
    route: CategoriesRouteType;
}

export type MenuPropsType = {
    navigation: StackNavigation;
    categories: ICategory[];
    generateGame: (question: IQuestion) => void; 
    amountQuestions: number; 
    amountOptions: TextOptions;
}

export type AmountQuestionsPropsType = {
    amountQuestions: number;
    setOptionsData: (optionsData: SetStateAction<IOptions>) => void;
}

export type AmountOptionsPropsType = {
    amountOptions: TextOptions;
    setOptionsData: (optionsData: SetStateAction<IOptions>) => void;
}

export type OptionGamePropsType = {
    text: TextOptions;
    amountOptions: TextOptions;
    func: (value: TextOptions) => void;
}

export type ShowCategoriesPropsType = {
    categories: ICategory[];
    changeCategoryAction: (changeCategory: (category: ICategory) => void, category: ICategory) => void;
    changeCategory: (category: ICategory) => void;
}

export type CategoryPropsType = {
    category: ICategory;
    changeCategoryAction: (changeCategory: (category: ICategory) => void, category: ICategory) => void;
    changeCategory: (category: ICategory) => void;
}

export type GameStatisticsPropsType = {
    numberQuestion: number;
    questions: IQuestion[];
    isCorrect: boolean;
    isIncorrect: boolean;
    isFinish: boolean;
    isPreFinish: boolean;
    showLetters: number;
    showOptions: number;
}

export type AnswerPropsType = {
    answer: boolean;
    correctAnswer: string;
    continueGame: () => void;
}

export type FinishPropsType = {
    corrects: number;
    questions: number;
    showErrors: () => void;
    continueHome: () => void;
    isGameError: boolean;
}

export type StatisticsFinishPropsType = {
    corrects: number;
    questions: number;
}

export type ActionsFinishPropsType = {
    areErrors: boolean; 
    showErrors: () => void;
    continueHome: () => void;
}

export type SectionOptionsPropsTypes = {
    options: string[]; 
    amountOptions: TextOptions; 
    nextQuestion: (value: string) => void;
}

export type QuestionGameStatisticsPropsType = {
    questions: IQuestion[]; 
    numberQuestion: number;
}

export type HelpsPropsType = {
    showLetters: number; 
    showOptions: number;
}

export type HelpButtonPropsType = {
    text: string;
    icon: string;
    amount: number;
}

export type KeyboardPropsType = {
    handleChange: (value: string) => void;
    input: string;
    keyboard: string[][];
}

export type TextKeyboardPropsType = {
    handleChange: (value: string) => void;
    keyboard: string[][];
}

export type KeyPropsType = {
    char: string;
    handleChange: (value: string) => void;
}