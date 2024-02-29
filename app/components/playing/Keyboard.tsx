import { View } from 'react-native'

import InputKeyboard from './components/keyboard/InputKeyboard'
import TextKeyboard from './components/keyboard/TextKeyboard'

import { playingStyles } from '../../styles/playing.styles'

import { KeyboardPropsType } from '../../types/props.types'

const Keyboard = ({ keyboard, handleChange, input, nextQuestion }: KeyboardPropsType) => {
    return (
        <View style={playingStyles.containerKeyboard}>
            <InputKeyboard input={input} nextQuestion={nextQuestion} />
            <TextKeyboard keyboard={keyboard} handleChange={handleChange} />
        </View>
    )
}

export default Keyboard