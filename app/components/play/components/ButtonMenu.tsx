import { Text, Pressable } from 'react-native'

import { homeStyles } from '../../../styles/home.styles'

import { ButtonMenuPlayPropsType } from '../../../types/props.types'

const ButtonMenuPlay = ({ text, func, option }: ButtonMenuPlayPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            }, homeStyles.buttonMenu]} onPress={() => func(option)}>
            <Text style={homeStyles.textButtonMenu}>{text}</Text>
        </Pressable>
    )
}

export default ButtonMenuPlay