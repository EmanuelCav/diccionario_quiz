import { Text, Pressable } from 'react-native'

import { optionsStyles } from '../../../styles/options.styles'

import { OptionGamePropsType } from '../../../types/props.types'

const OptionGame = ({ text, amountOptions, func }: OptionGamePropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : `${amountOptions === text ? '#f1889b' : '#ffffff'}`
            },
            optionsStyles.option
        ]} onPress={() => func(text)}>
            <Text style={[optionsStyles.optionText, {
                color: amountOptions === text ? '#ffffff' : '#f1889b'
            }]}>{text}</Text>
        </Pressable>
    )
}

export default OptionGame