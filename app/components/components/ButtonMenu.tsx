import { Text, Pressable } from 'react-native'

import { generalStyles } from '../../styles/general.styles'

import { ButtonMenuPropsType } from '../../types/props.types'

const ButtonMenu = ({ text, func }: ButtonMenuPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            }, generalStyles.buttonMenu]} onPress={func}>
            <Text style={generalStyles.textButtonMenu}>{text}</Text>
        </Pressable>
    )
}

export default ButtonMenu