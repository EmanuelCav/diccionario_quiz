import { View } from 'react-native'

import Key from './components/textKeyboard/Key'

import { playingStyles } from '../../../../styles/playing.styles'

import { TextKeyboardPropsType } from '../../../../types/props.types'

const TextKeyboard = ({ keyboard, handleChange }: TextKeyboardPropsType) => {
    return (
        <View style={playingStyles.containerTextKeyboard}>
            {
                keyboard.map((keys: string[]) => {
                    return <View style={playingStyles.containSectionKeys}>
                        {
                            keys.map((key: string) => {
                                return <Key handleChange={handleChange} char={key} key={key} />
                            })
                        }
                    </View>
                })
            }
        </View>
    )
}

export default TextKeyboard