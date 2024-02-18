import { Text, Pressable } from 'react-native'

import { homeStyles } from '../../../styles/home.styles'

import { ButtonMenuPropsType } from '../../../types/props.types'

const ButtonMenu = ({ text, func }: ButtonMenuPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            }, homeStyles.buttonMenu]} onPress={func}>
            <Text style={homeStyles.textButtonMenu}>{text}</Text>
        </Pressable>
    )
}

export default ButtonMenu