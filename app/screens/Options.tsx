import { useState } from "react";
import { View } from 'react-native'

import Sounds from "../components/options/Sounds";
import ButtonAccept from '../components/components/ButtonAccept'
import AmountQuestions from '../components/options/AmountQuestions'

import { StackNavigation } from '../types/props.types'
import { IOptions } from "../interface/User";

import { generalStyles } from '../styles/general.styles'

import { userStore } from '../server/user/store'
import { changeOptionsAction } from "../server/actions/user.actions";

import { setStorage } from "../helper/storage";

const Options = ({ navigation }: { navigation: StackNavigation }) => {

    const { amountQuestions, helps, changeOptions, antonyms, definitions, synonyms, sounds, corrections, changeSounds } = userStore()

    const initialState: IOptions = {
        amountQuestions
    }

    const [optionsData, setOptionsData] = useState<IOptions>(initialState)

    const goBack = () => {
        setStorage({
            amountQuestions,
            helps,
            antonyms,
            definitions,
            synonyms,
            sounds,
            corrections
        })

        changeOptionsAction(optionsData, changeOptions!, navigation)
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <Sounds sounds={sounds} changeSounds={changeSounds!} />
            <AmountQuestions amountQuestions={optionsData.amountQuestions} setOptionsData={setOptionsData} />
            <ButtonAccept text='ACEPTAR' func={goBack} />
        </View>
    )
}

export default Options