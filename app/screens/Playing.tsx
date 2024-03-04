import { useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'
// import { InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
// import { EXPO_INTERSITICIAL, EXPO_RECOMPENSADO } from '@env';

import { IQuestion } from '../interface/Game'
import { PlayingPropsType } from '../types/props.types'
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

import { emptyOptions, helpsOptions, keyboard, verifyValue } from '../helper/game'

// const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : `${EXPO_INTERSITICIAL}`;

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//     keywords: ['fashion', 'clothing'],
// });

// const adUnitIdReward = __DEV__ ? TestIds.REWARDED : `${EXPO_RECOMPENSADO}`;

// const rewarded = RewardedAd.createForAdRequest(adUnitIdReward, {
//     keywords: ['fashion', 'clothing'],
// });

const Playing = ({ navigation, route }: PlayingPropsType) => {

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

        let valueAnswer = verifyValue(value, !isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer)

        if (valueAnswer === (!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer)) {
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
        const optionsAllQuestions = route.params.allQuestions.filter((aq) => aq.options.length > 0)
        emptyOptions(optionsAllQuestions)
        emptyQuestions()
        // interstitial.show()
        navigation.navigate('Home')
    }

    const handleHelp = (help: HelpType) => {
        setIsHelped(true)
        setHelpType(help)

        if (help === 'add') {
            // rewarded.show()
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

    // useEffect(() => {
    //     const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
    //         console.log("Loading add");
    //     });

    //     interstitial.load();

    //     return unsubscribe;
    // }, []);

    // useEffect(() => {
    //     const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
    //         console.log("Loading add");
    //     });
    //     const unsubscribeEarned = rewarded.addAdEventListener(
    //         RewardedAdEventType.EARNED_REWARD,
    //         reward => {
    //             console.log('User earned reward of ', reward);
    //         },
    //     );

    //     rewarded.load();

    //     return () => {
    //         unsubscribeLoaded();
    //         unsubscribeEarned();
    //     };
    // }, []);

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