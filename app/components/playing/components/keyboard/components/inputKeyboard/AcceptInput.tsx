import { Dimensions, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { playingStyles } from '../../../../../../styles/playing.styles'

const AcceptInput = () => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            },
            playingStyles.containAcceptInput
        ]}>
            <Icon name='arrow-right-bold' color='#ffffff' size={Dimensions.get("window").height / 46} />
        </Pressable>
    )
}

export default AcceptInput