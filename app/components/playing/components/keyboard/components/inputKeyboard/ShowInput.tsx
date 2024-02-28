import { Text, View } from 'react-native'

import { playingStyles } from '../../../../../../styles/playing.styles'

const ShowInput = ({ input }: { input: string }) => {
    return (
        <View style={playingStyles.containerShowInput}>
            <Text style={playingStyles.textInputOption}>{input}</Text>
        </View>
    )
}

export default ShowInput