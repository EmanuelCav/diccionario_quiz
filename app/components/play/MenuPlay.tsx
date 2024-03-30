import { View } from "react-native"
import { useState, useEffect } from 'react'
import { COLLECTION_QUESTIONS } from '@env'

import ButtonMenu from "../components/ButtonMenu"

import { playStyles } from "../../styles/play.styles"

import { IQuestion } from "../../interface/Game"
import { MenuPlayPropsType } from "../../types/props.types"

import { generateGameAction } from "../../server/actions/game.actions"

import { firestore } from '../../../firebase.config'
import { collection, onSnapshot } from 'firebase/firestore'

const MenuPlay = ({ navigation, amountOptions, amountQuestions, generateGame, categories, changeLoading }: MenuPlayPropsType) => {

    const [questions, setQuestions] = useState<IQuestion[]>([])

    const redirectPlaying = () => {
        if (categories.filter(c => c.isSelect).length > 0) {
            generateGameAction(questions, navigation, amountOptions, amountQuestions, generateGame, categories)
            return
        }

        navigation.navigate('Categories', {
            isCategory: false
        })
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
            <ButtonMenu text="Definiciones" func={redirectPlaying} />
            <ButtonMenu text="Sinónimos" func={redirectPlaying} />
            <ButtonMenu text="Antónimos" func={redirectPlaying} />
            <ButtonMenu text="Corrección gramatical" func={redirectPlaying} />
            <ButtonMenu text="Regresar" func={goBack} />
        </View>
    )
}

export default MenuPlay