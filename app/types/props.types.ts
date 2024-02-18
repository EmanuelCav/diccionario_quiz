import { NativeStackNavigationProp } from '@react-navigation/native-stack'

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