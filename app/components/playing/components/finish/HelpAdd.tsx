import { Dimensions, View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconOption from 'react-native-vector-icons/MaterialCommunityIcons'

import { HelpType } from '../../../../types/key.types'
import { playingStyles } from '../../../../styles/playing.styles'

const HelpAdd = ({ handleHelp }: { handleHelp: (help: HelpType) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            playingStyles.buttonHelpAdd,
            {
                backgroundColor: pressed ? '#f99aaa' : '#f1889b'
            }
        ]} onPress={() => handleHelp('add')}>
            <View style={playingStyles.containIconHelpAdd}>
                <IconOption name='clipboard-list' color='#ffffff' size={Dimensions.get("window").height / 41} />
                <Text style={playingStyles.textGameStatistics}>x3</Text>
            </View>
            <Icon name='video' color='#ffffff' size={Dimensions.get("window").height / 41} />
        </Pressable>
    )
}

export default HelpAdd