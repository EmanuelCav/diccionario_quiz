import { View, Pressable, Text } from 'react-native'

import { optionsStyles } from '../../../styles/options.styles'

import { SoundsPropsType } from '../../../types/props.types'

const ButtonsSound = ({ sounds, changeSounds }: SoundsPropsType) => {
  return (
    <View style={optionsStyles.containerButtonSounds}>
      <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#f99aaa' : `${sounds ? '#f1889b' : '#ffffff'}`
        }, optionsStyles.buttonSounds]} onPress={changeSounds} disabled={sounds}>
        <Text style={[optionsStyles.textButtonSounds, { color: sounds ? '#ffffff' : '#f1889b' }]}>SI</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#f99aaa' : `${sounds ? '#ffffff' : '#f1889b'}`
        }, optionsStyles.buttonSounds]} onPress={changeSounds}>
        <Text style={[optionsStyles.textButtonSounds, { color: sounds ? '#f1889b' : '#ffffff' }]} disabled={!sounds}>NO</Text>
      </Pressable>
    </View>
  )
}

export default ButtonsSound