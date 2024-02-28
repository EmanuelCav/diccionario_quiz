import { View } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import HelpButton from './components/HelpButton'

import { HelpsPropsType } from '../../../../types/props.types'

const Helps = ({ showLetters, showOptions }: HelpsPropsType) => {
    return (
        <View style={playingStyles.containerHelps}>
            <HelpButton icon='format-letter-case' text='Letras' amount={showLetters} />
            <HelpButton icon='clipboard-list' text='Opciones' amount={showOptions} />
        </View>
    )
}

export default Helps