import { Text, Pressable } from 'react-native'

import { generalStyles } from '../../../styles/general.styles'

import { ButtonMenuPlayPropsType } from '../../../types/props.types'

const ButtonMenuPlay = ({ text, func, option, game }: ButtonMenuPlayPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            }, generalStyles.buttonMenu]} onPress={() => func(option, game)}>
            <Text style={generalStyles.textButtonMenu}>{text}</Text>
        </Pressable>
    )
}

export default ButtonMenuPlay