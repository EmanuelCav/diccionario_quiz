import { View, Text } from "react-native"
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

    const getDefinitions = (): IQuestion[] => {

        let questionsData: IQuestion[] = []

        const collectionQuestionsRef = collection(firestore, COLLECTION_QUESTIONS)
        onSnapshot(collectionQuestionsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    questionsData.push(doc.data() as IQuestion)
                })
            }
        })

        return questionsData

    }

    const getSynonyms = (): IQuestion[] => {

        let synonymsData: IQuestion[] = []

        const collectionSynonymsRef = collection(firestore, COLLECTION_SYNONYMS)
        onSnapshot(collectionSynonymsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    synonymsData.push(doc.data() as IQuestion)
                })
            }
        })

        return synonymsData

    }

    const getAntonyms = (): IQuestion[] => {

        let antonymsData: IQuestion[] = []

        const collectionAntonymsRef = collection(firestore, COLLECTION_ANTONYMS)
        onSnapshot(collectionAntonymsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    antonymsData.push(doc.data() as IQuestion)
                })
            }
        })

        return antonymsData

    }

    const getCorrections = (): IQuestion[] => {

        let correctionsData: IQuestion[] = []

        const collectionCorrectionsRef = collection(firestore, COLLECTION_CORRECTIONS)
        onSnapshot(collectionCorrectionsRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    correctionsData.push(doc.data() as IQuestion)
                })
            }
        })

        return correctionsData

    }

    const redirectPlaying = (option: TextOptions, game: GameType) => {

        changeLoading(true)

        let gameQuestions: IQuestion[] = []

        if (game === 'correction') {
            gameQuestions = getCorrections()
        } else if (game === 'synonyms') {
            gameQuestions = getSynonyms()
        } else if (game === 'antonyms') {
            gameQuestions = getAntonyms()
        } else {
            gameQuestions = getDefinitions()
        }

        setTimeout(() => {
            if(gameQuestions.length > 0) {
                generateGameAction(gameQuestions, navigation, generateGame, amountQuestions, option, game)
            }

            changeLoading(false)
        }, 5000);

    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={playStyles.containerMenuPlay}>
            <Text style={playStyles.playTitle}>Selecciona una opción para iniciar</Text>
            <ButtonMenuPlay text="Definiciones" func={redirectPlaying} option="Sin opciones" game='definitions' />
            <ButtonMenuPlay text="Sinónimos" func={redirectPlaying} option="Con opciones" game='synonyms' />
            <ButtonMenuPlay text="Antónimos" func={redirectPlaying} option="Con opciones" game='antonyms' />
            <ButtonMenuPlay text="Correcciones Ortográficas" func={redirectPlaying} option="Con opciones" game='correction' />
            <ButtonMenu text="Regresar" func={goBack} />
        </View>
    )
}

export default MenuPlay