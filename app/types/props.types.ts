import { SetStateAction } from "react";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ICategory, IOptions } from '../interface/User';
import { TextOptions } from "./key.types";

type Routes = {
    Home: undefined;
    Playing: undefined;
    Options: undefined;
    Categories: undefined;
    Statistics: undefined;
}

export type StackNavigation = NativeStackNavigationProp<Routes>;

export type ButtonMenuPropsType = {
    text: string;
    func: () => void;
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
    amountOptions: string;
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