import { useState } from "react";
import { View } from 'react-native'

import ButtonAccept from '../components/components/ButtonAccept'
import AmountQuestions from '../components/options/AmountQuestions'

import { StackNavigation } from '../types/props.types'
import { IOptions } from "../interface/User";

import { generalStyles } from '../styles/general.styles'

import { userStore } from '../server/user/store'
import { changeOptionsAction } from "../server/actions/user.actions";

import { setStorage } from "../helper/storage";

const Options = ({ navigation }: { navigation: StackNavigation }) => {

    // const { amountOptions, amountQuestions, helps, categories, changeOptions } = userStore()

    // const initialState = {
    //     amountOptions: 0,
    //     amountQuestions: 0
    // }

    // const [optionsData, setOptionsData] = useState<IOptions>(initialState)

    // const goBack = () => {
    //     setStorage({
    //         amountOptions: optionsData.amountOptions,
    //         amountQuestions: optionsData.amountQuestions,
    //         categories,
    //         helps
    //     })

    //     changeOptionsAction(optionsData, changeOptions!, navigation)
    // }

    return (
        <View style={generalStyles.containerGeneral}>
            {/* <AmountOptions amountOptions={optionsData.amountOptions} setOptionsData={setOptionsData} />
            <AmountQuestions amountQuestions={optionsData.amountQuestions} setOptionsData={setOptionsData} />
            <ButtonAccept text='ACEPTAR' func={goBack} disabled={false} /> */}
        </View>
    )
}

export default Options