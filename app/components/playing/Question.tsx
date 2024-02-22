import { View, Text } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import { IQuestion } from '../../interface/Game'

const Question = ({ question }: { question: IQuestion }) => {
    return (
        <View style={playingStyles.containerQuestion}>
            <Text style={playingStyles.textQuestionText}>
                {question.text}
            </Text>
        </View>
    )
}

export default Question