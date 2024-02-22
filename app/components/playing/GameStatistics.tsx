import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import QuestionGameStatistics from './components/gameStatistics/QuestionGameStatistics'
import Helps from './components/gameStatistics/Helps'

import { GameStatisticsPropsType } from '../../types/props.types'

const GameStatistics = ({ numberQuestion, questions, isCorrect, isIncorrect, isFinish, isPreFinish }: GameStatisticsPropsType) => {
    return (
        <View style={playingStyles.containerGameStatistics}>
            <QuestionGameStatistics questions={questions} numberQuestion={numberQuestion} />
            <Helps />
        </View>
    )
}

export default GameStatistics