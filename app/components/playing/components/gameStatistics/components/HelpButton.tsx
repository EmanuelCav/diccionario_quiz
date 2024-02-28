import { Dimensions, Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HelpButtonPropsType } from '../../../../../types/props.types'

import { playingStyles } from '../../../../../styles/playing.styles'

const HelpButton = ({ text, icon, amount }: HelpButtonPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            },
            playingStyles.containerHelpButton
        ]}>
            <Text style={playingStyles.textGameStatistics}>{amount}</Text>
            <View style={playingStyles.containIconHelpButton}>
                <Icon name={icon} color='#ffffff' size={Dimensions.get("window").height / 41} />
                <Text style={[playingStyles.textGameStatistics, { marginLeft: Dimensions.get("window").width / 120 }]}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default HelpButton