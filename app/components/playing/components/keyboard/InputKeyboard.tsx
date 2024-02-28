import { View } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import AcceptInput from './components/inputKeyboard/AcceptInput'
import ShowInput from './components/inputKeyboard/ShowInput'

const InputKeyboard = ({ input }: { input: string }) => {
  return (
    <View style={playingStyles.containerInputKeyboard}>
      <ShowInput input={input} />
      <AcceptInput />
    </View>
  )
}

export default InputKeyboard