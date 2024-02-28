import { View, Text, Pressable } from 'react-native'

import { generalStyles } from '../../styles/general.styles'

import { ButtonAcceptPropsType } from '../../types/props.types'

const ButtonAccept = ({ text, func, disabled }: ButtonAcceptPropsType) => {
    return (
        <View style={generalStyles.containerButtonAccept}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#f99aaa' : `${disabled ? '#dddddd' : '#f1889b'}`
                }, generalStyles.buttonAccept]} onPress={func} disabled={disabled}>
                <Text style={generalStyles.textButtonAccept}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonAccept