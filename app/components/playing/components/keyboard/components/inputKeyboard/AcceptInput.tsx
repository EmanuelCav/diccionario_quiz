import { Dimensions, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { playingStyles } from '../../../../../../styles/playing.styles'

import { InputKeyboardPropsType } from '../../../../../../types/props.types'

const AcceptInput = ({ nextQuestion, input }: InputKeyboardPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : `${input.length === 0 ? '#dddddd' : '#f1889b'}`
            },
            playingStyles.containAcceptInput
        ]} onPress={() => nextQuestion(input)} disabled={input.length === 0}>
            <Icon name='arrow-right-bold' color='#ffffff' size={Dimensions.get("window").height / 46} />
        </Pressable>
    )
}

export default AcceptInput