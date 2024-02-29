import { Text, View } from 'react-native'

import { QuestionGameStatisticsPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const QuestionGameStatistics = ({ questions, numberQuestion }: QuestionGameStatisticsPropsType) => {
    return (
        <View style={playingStyles.containerQuestionGameStatistics}>
            <Text style={playingStyles.textGameStatistics}>Categoría: {questions[numberQuestion-1].category}</Text>
            <Text style={playingStyles.textGameStatistics}>{numberQuestion}/{questions.length}</Text>
        </View>
    )
}

export default QuestionGameStatistics