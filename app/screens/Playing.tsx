import { useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'

import allQuestions from '../../assets/questions.json'

import { IQuestion } from '../interface/Game'
import { StackNavigation } from '../types/props.types'
import { HelpType } from '../types/key.types'

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

import { emptyOptions, helpsOptions, keyboard } from '../helper/game'

const Playing = ({ navigation }: { navigation: StackNavigation }) => {

    const { amountOptions, correctQuestion, countQuestion, helps, changeHelps } = userStore()
    const { questions, emptyQuestions } = gameStore()

    const [input, setInput] = useState<string>('')

    const [numberQuestion, setNumberQuestion] = useState<number>(0)
    const [corrects, setCorrects] = useState<number>(0)

    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
    const [isPreFinish, setIsPreFinish] = useState<boolean>(false)
    const [isFinish, setIsFinish] = useState<boolean>(false)
    const [isGameError, setIsGameError] = useState<boolean>(false)
    const [isHelped, setIsHelped] = useState<boolean>(false)
    const [isAdd, setIsAdd] = useState<boolean>(false)

    const [helpType, setHelpType] = useState<HelpType>('help')

    const [errors, setErrors] = useState<IQuestion[]>([])
    const [gameErrors, setGameErrors] = useState<IQuestion[]>([])

    const [optionsHelped, setOptionsHelped] = useState<string[]>(helpsOptions(questions[numberQuestion].options, questions[numberQuestion], Number(amountOptions)))

    const nextQuestion = (value: string) => {

        let verifyValue = value.trim()

        if (verifyValue === (!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer)) {
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

        setInput('')
        setIsHelped(false)

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
        setIsHelped(false)
        setErrors([])
        setOptionsHelped([])
    }

    const continueHome = () => {
        const optionsAllQuestions = allQuestions.filter((aq) => aq.options.length > 0)
        emptyOptions(optionsAllQuestions)
        emptyQuestions()
        // interstitial.show()
        navigation.navigate('Home')
    }

    const handleHelp = (help: HelpType) => {
        setIsHelped(true)
        setHelpType(help)

        if (help === 'add') {
            //   rewarded.show()
            setIsAdd(true)
        }
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

        if (input.length >= 28) return

        setInput(input + value)
    }

    useEffect(() => {
        if (!isGameError) {
            countQuestion(questions[numberQuestion].category)
            setOptionsHelped(helpsOptions(questions[numberQuestion].options, questions[numberQuestion], Number(amountOptions)))
            return
        }

        setOptionsHelped(helpsOptions(questions[numberQuestion].options, gameErrors[numberQuestion], Number(amountOptions)))
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

    useEffect(() => {
        if (isHelped) {
            if (helpType === 'add') {
                changeHelps(3)
                return
            }

            changeHelps(-1)
        }
    }, [isHelped])

    return (
        <View style={generalStyles.containerGeneral}>
            <Question question={!isGameError ? questions[numberQuestion] : gameErrors[numberQuestion]} />
            <GameStatistics questions={questions} numberQuestion={numberQuestion + 1} helps={helps} isHelped={isCorrect || isIncorrect || isHelped || helps === 0} handleHelp={handleHelp} 
            isOptions={amountOptions !== 'Sin opciones'} />
            {
                (isCorrect || isIncorrect) ?
                    <Answer answer={isCorrect} correctAnswer={!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer} continueGame={continueGame} />
                    : amountOptions === 'Sin opciones' ? (
                        <>
                            {
                                isHelped ? <Options options={!isGameError ? questions[numberQuestion].options : gameErrors[numberQuestion].options} nextQuestion={nextQuestion} amountOptions={Number(amountOptions)}
                                    optionsHelped={optionsHelped} isHelped={isHelped} />
                                    : <Keyboard keyboard={keyboard} handleChange={handleChange} input={input} nextQuestion={nextQuestion} />
                            }
                        </>
                    ) : (
                        <Options options={!isGameError ? questions[numberQuestion].options : gameErrors[numberQuestion].options} nextQuestion={nextQuestion} amountOptions={Number(amountOptions)}
                            optionsHelped={optionsHelped} isHelped={isHelped} />
                    )
            }
            {
                isPreFinish && <PreFinish preFinish={preFinish} />
            }
            {
                isFinish && <Finish corrects={corrects} questions={!isGameError ? questions.length : gameErrors.length}
                    showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} handleHelp={handleHelp} isAdd={isAdd} />
            }
        </View>
    )
}

export default Playing