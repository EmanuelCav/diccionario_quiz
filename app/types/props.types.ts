import { SetStateAction } from "react";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { IOptions } from '../interface/User';
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