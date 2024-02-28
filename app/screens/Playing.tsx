import { useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'
// import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
// import { EXPO_INTERSTITIAL } from '@env';

import allQuestions from '../../assets/questions.json'

import { IQuestion } from '../interface/Game'
import { StackNavigation } from '../types/props.types'

import Question from '../components/playing/Question'
import GameStatistics from '../components/playing/GameStatistics'
import Options from '../components/playing/Options'
import Answer from '../components/playing/Answer'
import PreFinish from '../components/playing/PreFinish'
import Finish from '../components/playing/Finish'
import Keyboard from '../components/playing/Keyboard'

import { generalStyles } from '../styles/general.styles'

import { userStore } from '../server/user/store'
import { gameStore } from '../server/question/store'

import { emptyOptions, keyboard } from '../helper/game'

const Playing = ({ navigation }: { navigation: StackNavigation }) => {

    const { categories, amountOptions, correctQuestion, countQuestion, showLetters, showOptions } = userStore()
    const { questions } = gameStore()

    const [input, setInput] = useState<string>('')

    const [numberQuestion, setNumberQuestion] = useState<number>(0)
    const [corrects, setCorrects] = useState<number>(0)

    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
    const [isPreFinish, setIsPreFinish] = useState<boolean>(false)
    const [isFinish, setIsFinish] = useState<boolean>(false)
    const [isGameError, setIsGameError] = useState<boolean>(false)

    const [errors, setErrors] = useState<IQuestion[]>([])
    const [gameErrors, setGameErrors] = useState<IQuestion[]>([])

    const nextQuestion = (value: string) => {

        if (value === (!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer)) {
            setIsCorrect(true)
            setCorrects(corrects + 1)
        } else {
            if (!isGameError) {
                setErrors([...errors, questions[numberQuestion]])
            } else {
                setErrors([...errors, gameErrors[numberQuestion]])
            }

            setIsIncorrect(true)
        }

        if (numberQuestion === questions.length - 1 || numberQuestion === gameErrors.length - 1) {
            setIsPreFinish(true)
        }

    }

    const continueGame = () => {
        setIsCorrect(false)
        setIsIncorrect(false)

        if (isPreFinish) return

        setNumberQuestion(numberQuestion + 1)
    }

    const preFinish = () => {
        setIsFinish(true)
    }

    const showErrors = () => {
        setIsCorrect(false)
        setIsIncorrect(false)
        setIsPreFinish(false)
        setIsFinish(false)
        setIsGameError(true)
        setNumberQuestion(0)
        setCorrects(0)
        setGameErrors(errors)
        setErrors([])
    }

    const continueHome = () => {
        const optionsAllQuestions = allQuestions.filter((aq) => aq.options.length > 0)
        emptyOptions(optionsAllQuestions)
        // interstitial.show()
        navigation.navigate('Home')
    }

    const handleChange = (value: string) => {
        if (!/^[a-zA-ZñÑ]+$/.test(value)) {

            if (value === "[X]") {
                setInput("")
                return
            }

            setInput(input.slice(0, input.length - 1))
            return
        }

        setInput(input + value)
    }

    useEffect(() => {
        if (!isGameError) {
            countQuestion(questions[numberQuestion].category)
        }
    }, [numberQuestion])

    useEffect(() => {
        if (isCorrect && !isGameError) {
            correctQuestion(questions[numberQuestion].category)
        }
    }, [corrects])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    return (
        <View style={generalStyles.containerGeneral}>
            <Question question={!isGameError ? questions[numberQuestion] : gameErrors[numberQuestion]} />
            <GameStatistics questions={questions} numberQuestion={numberQuestion + 1} showLetters={showLetters} showOptions={showOptions}
                isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish}
            />
            {
                (isCorrect || isIncorrect) ?
                    <Answer answer={isCorrect} correctAnswer={!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer} continueGame={continueGame} />
                    : amountOptions === 'Sin opciones' ?
                        <Keyboard keyboard={keyboard} handleChange={handleChange} input={input} />
                        : <Options options={!isGameError ? questions[numberQuestion].options : gameErrors[numberQuestion].options} nextQuestion={nextQuestion} amountOptions={amountOptions} />
            }
            {
                isPreFinish && <PreFinish preFinish={preFinish} />
            }
            {
                isFinish && <Finish corrects={corrects} questions={!isGameError ? questions.length : gameErrors.length}
                    showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} />
            }
        </View>
    )
}

export default Playing