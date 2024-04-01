import { View, Text } from "react-native"
import { useState, useEffect } from 'react'
import { COLLECTION_ANTONYMS, COLLECTION_CORRECTIONS, COLLECTION_QUESTIONS, COLLECTION_SYNONYMS } from '@env'

import ButtonMenuPlay from "./components/ButtonMenu"
import ButtonMenu from "../components/ButtonMenu"

import { playStyles } from "../../styles/play.styles"

import { IQuestion } from "../../interface/Game"
import { MenuPlayPropsType } from "../../types/props.types"
import { GameType, TextOptions } from "../../types/key.types"

import { generateGameAction } from "../../server/actions/game.actions"

import { firestore } from '../../../firebase.config'
import { collection, onSnapshot } from 'firebase/firestore'

const MenuPlay = ({ navigation, generateGame, changeLoading, amountQuestions }: MenuPlayPropsType) => {

    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [synonyms, setSynonyms] = useState<IQuestion[]>([])
    const [antonyms, setAntonyms] = useState<IQuestion[]>([])
    const [corrections, setCorrections] = useState<IQuestion[]>([])

    const redirectPlaying = (option: TextOptions, gameQuestions: IQuestion[], game: GameType) => {
        generateGameAction(gameQuestions, navigation, generateGame, amountQuestions, option, game)
    }

    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => {

        let questionsData: IQuestion[] = []
        let synonymsData: IQuestion[] = []
        let antonymsData: IQuestion[] = []
        let correctionsData: IQuestion[] = []

        const collectionQuestionsRef = collection(firestore, COLLECTION_QUESTIONS)
        const suscriberQuestions = onSnapshot(collectionQuestionsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    questionsData.push(doc.data() as IQuestion)
                })
            }
        })

        const collectionSynonymsRef = collection(firestore, COLLECTION_SYNONYMS)
        const suscriberSynonyms = onSnapshot(collectionSynonymsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    synonymsData.push(doc.data() as IQuestion)
                })
            }
        })

        const collectionAntonymsRef = collection(firestore, COLLECTION_ANTONYMS)
        const suscriberAntonyms = onSnapshot(collectionAntonymsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    antonymsData.push(doc.data() as IQuestion)
                })
            }
        })

        const collectionCorrectionsRef = collection(firestore, COLLECTION_CORRECTIONS)
        const suscriberCorrections = onSnapshot(collectionCorrectionsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    correctionsData.push(doc.data() as IQuestion)
                })
            }
        })

        setQuestions(questionsData)
        setSynonyms(synonymsData)
        setAntonyms(antonymsData)
        setCorrections(correctionsData)

        setTimeout(() => {
            changeLoading(false)
        }, 2622);

        return () => {
            suscriberQuestions()
            suscriberSynonyms()
            suscriberAntonyms()
            suscriberCorrections()
        }

    }, [])

    return (
        <View style={playStyles.containerMenuPlay}>
            <Text style={playStyles.playTitle}>Selecciona una opción para iniciar</Text>
            <ButtonMenuPlay text="Definiciones" func={redirectPlaying} option="Sin opciones" gameQuestions={questions} game='definitions' />
            <ButtonMenuPlay text="Sinónimos" func={redirectPlaying} option="Con opciones" gameQuestions={synonyms} game='synonyms' />
            <ButtonMenuPlay text="Antónimos" func={redirectPlaying} option="Con opciones" gameQuestions={antonyms} game='antonyms' />
            <ButtonMenuPlay text="Correcciones Ortográficas" func={redirectPlaying} option="Con opciones" gameQuestions={corrections} game='correction' />
            <ButtonMenu text="Regresar" func={goBack} />
        </View>
    )
}

export default MenuPlay