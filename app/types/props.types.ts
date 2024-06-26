import { SetStateAction } from "react";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp } from "@react-navigation/native";

import { ICategory, IOptions, IStatistic } from '../interface/User';
import { GameType, HelpType, TextOptions } from "./key.types";
import { IQuestion } from "../interface/Game";

type Routes = {
    Home: undefined;
    Playing: {
        allQuestions: IQuestion[];
        option: TextOptions;
        game: GameType;
    };
    Options: undefined;
    Statistics: undefined;
    Play: undefined;
}

export type StackNavigation = NativeStackNavigationProp<Routes>;

export type PlayingRouteType = RouteProp<Routes, 'Playing'>

export type PlayingPropsType = {
    navigation: StackNavigation;
    route: PlayingRouteType
}

export type ButtonMenuPropsType = {
    text: string;
    func: () => void;
}

export type ButtonMenuPlayPropsType = {
    text: string;
    func: (option: TextOptions, game: GameType) => void;
    option: TextOptions;
    game: GameType;
}

export type ButtonAcceptPropsType = {
    text: string;
    func: () => void;
}

export type MenuPlayPropsType = {
    amountQuestions: number;
    navigation: StackNavigation;
    generateGame: (question: IQuestion) => void; 
    changeLoading: (response: boolean) => void;
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
    isHelped: boolean;
    helps: number;
    handleHelp: (help: HelpType) => void;
    isOptions: boolean;
    handleQuit: () => void;
    isQuit: boolean;
}

export type CategoryStatisticPropsType = {
    text: string;
    statistic: IStatistic;
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
    handleHelp: (help: HelpType) => void;
    isAdd: boolean;
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
    amountOptions: number; 
    nextQuestion: (value: string) => void;
    optionsHelped: string[];
    isHelped: boolean;
}

export type QuestionGameStatisticsPropsType = {
    questions: IQuestion[]; 
    numberQuestion: number;
}

export type HelpsPropsType = {
    helps: number;
    isHelped: boolean;
    handleHelp: (help: HelpType) => void;
    isOptions: boolean;
    handleQuit: () => void;
    isQuit: boolean;
}

export type KeyboardPropsType = {
    handleChange: (value: string) => void;
    input: string;
    keyboard: string[][];
    nextQuestion: (value: string) => void;
}

export type TextKeyboardPropsType = {
    handleChange: (value: string) => void;
    keyboard: string[][];
}

export type InputKeyboardPropsType = {
    input: string;
    nextQuestion: (value: string) => void;
}

export type KeyPropsType = {
    char: string;
    handleChange: (value: string) => void;
}

export type OptionPropsTypes = {
    nextQuestion: (value: string) => void;
    amountOptions: number;
    option: string;
    disabled: boolean;
}

export type SoundsPropsType = {
    sounds: boolean;
    changeSounds: () => void;
}