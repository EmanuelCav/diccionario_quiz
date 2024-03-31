import { View } from "react-native"
import { useState, useEffect } from 'react'
import { COLLECTION_QUESTIONS } from '@env'

import ButtonMenuPlay from "./components/ButtonMenu"
import ButtonMenu from "../components/ButtonMenu"

import { playStyles } from "../../styles/play.styles"

import { IQuestion } from "../../interface/Game"
import { MenuPlayPropsType } from "../../types/props.types"
import { TextOptions } from "../../types/key.types"

import { generateGameAction } from "../../server/actions/game.actions"

import { firestore } from '../../../firebase.config'
import { collection, onSnapshot } from 'firebase/firestore'

const MenuPlay = ({ navigation, generateGame, changeLoading, amountQuestions }: MenuPlayPropsType) => {

    const [questions, setQuestions] = useState<IQuestion[]>([])

    const redirectPlaying = (option: TextOptions) => {
        generateGameAction(questions, navigation, generateGame, amountQuestions, option)
    }

    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => {

        let questionsData: IQuestion[] = []

        const collectionRef = collection(firestore, COLLECTION_QUESTIONS)
        const suscriber = onSnapshot(collectionRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    questionsData.push(doc.data() as IQuestion)
                })
            }
        })

        setQuestions(questionsData)

        setTimeout(() => {
            changeLoading(false)
        }, 1850);

        return () => {
            suscriber()
        }

    }, [])

    return (
        <View style={playStyles.containerMenuPlay}>
            <ButtonMenuPlay text="Definiciones" func={redirectPlaying} option="Sin opciones" />
            <ButtonMenuPlay text="Sinónimos" func={redirectPlaying} option="Con opciones" />
            <ButtonMenuPlay text="Antónimos" func={redirectPlaying} option="Con opciones" />
            <ButtonMenuPlay text="Corrección gramatical" func={redirectPlaying} option="Con opciones" />
            <ButtonMenu text="Regresar" func={goBack} />
        </View>
    )
}

export default MenuPlay