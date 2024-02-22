import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import SectionOptions from './components/options/SectionOptions'

import { SectionOptionsPropsTypes } from '../../types/props.types'

const Options = ({ options, amountOptions, nextQuestion }: SectionOptionsPropsTypes) => {
    return (
        <View style={playingStyles.containerOptions}>
            <SectionOptions options={options.slice(0, options.length / 2)} nextQuestion={nextQuestion} amountOptions={amountOptions} />
            <SectionOptions options={options.slice(options.length / 2, options.length)} nextQuestion={nextQuestion} amountOptions={amountOptions} />
        </View>
    )
}

export default Options