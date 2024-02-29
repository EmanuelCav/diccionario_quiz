import { View } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import AcceptInput from './components/inputKeyboard/AcceptInput'
import ShowInput from './components/inputKeyboard/ShowInput'

import { InputKeyboardPropsType } from '../../../../types/props.types'

const InputKeyboard = ({ input, nextQuestion }: InputKeyboardPropsType) => {
  return (
    <View style={playingStyles.containerInputKeyboard}>
      <ShowInput input={input} />
      <AcceptInput nextQuestion={nextQuestion} input={input} />
    </View>
  )
}

export default InputKeyboard