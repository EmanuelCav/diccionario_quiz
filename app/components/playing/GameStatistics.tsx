import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import QuestionGameStatistics from './components/gameStatistics/QuestionGameStatistics'
import Helps from './components/gameStatistics/Helps'

import { GameStatisticsPropsType } from '../../types/props.types'

const GameStatistics = ({ numberQuestion, questions, helps, isHelped, handleHelp, isOptions, handleQuit, isQuit }: GameStatisticsPropsType) => {
    return (
        <View style={playingStyles.containerGameStatistics}>
            <QuestionGameStatistics questions={questions} numberQuestion={numberQuestion} />
            <Helps isHelped={isHelped} helps={helps} handleHelp={handleHelp} isOptions={isOptions} handleQuit={handleQuit} isQuit={isQuit} />
        </View>
    )
}

export default GameStatistics