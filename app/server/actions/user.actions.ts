import { IOptions } from "../../interface/User";
import { StackNavigation } from "../../types/props.types";

export const changeOptionsAction = (optionsData: IOptions, changeOptions: (optionData: IOptions) => void, navigation: StackNavigation) => {
    changeOptions(optionsData)
    navigation.goBack()
}