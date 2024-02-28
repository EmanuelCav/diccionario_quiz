import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import QuestionGameStatistics from './components/gameStatistics/QuestionGameStatistics'
import Helps from './components/gameStatistics/Helps'

import { GameStatisticsPropsType } from '../../types/props.types'

const GameStatistics = ({ numberQuestion, questions, isCorrect, isIncorrect, isFinish, isPreFinish, showLetters, showOptions }: GameStatisticsPropsType) => {
    return (
        <View style={playingStyles.containerGameStatistics}>
            <QuestionGameStatistics questions={questions} numberQuestion={numberQuestion} />
            <Helps showLetters={showLetters} showOptions={showOptions} />
        </View>
    )
}

export default GameStatistics