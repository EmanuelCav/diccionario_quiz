import { Pressable, Text } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import { ButtonMenuPropsType } from '../../../../types/props.types'

const ButtonFinish = ({ text, func }: ButtonMenuPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b',
            },
            playingStyles.buttonFinish
        ]}
            onPress={func}>
            <Text style={playingStyles.textButtonFinish}>{text}</Text>
        </Pressable>
    )
}

export default ButtonFinish