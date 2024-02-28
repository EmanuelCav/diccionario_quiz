import { Pressable, Text } from 'react-native'

import { playingStyles } from '../../../../../../styles/playing.styles'

import { KeyPropsType } from '../../../../../../types/props.types'

const Key = ({ char, handleChange }: KeyPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            },
            playingStyles.buttonKey
        ]} onPress={() => handleChange(char)}>
            <Text style={playingStyles.textButtonKey}>{char}</Text>
        </Pressable>
    )
}

export default Key