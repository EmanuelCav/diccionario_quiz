import { Pressable, View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { playingStyles } from '../../../../styles/playing.styles'

import { HelpsPropsType } from '../../../../types/props.types'

const Helps = ({ helps, isHelped, handleHelp, isOptions }: HelpsPropsType) => {
    return (
        <View style={playingStyles.containerHelps}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#f99aaa' : `${isHelped ? '#dddddd' : '#f1889b'}`
                },
                playingStyles.containerHelpButton
            ]} onPress={() => handleHelp('help')} disabled={isHelped}>
                <Text style={playingStyles.textGameStatistics}>{helps}</Text>
                <View style={playingStyles.containIconHelpButton}>
                    <Icon name='clipboard-list' color='#ffffff' size={Dimensions.get("window").height / 41} />
                    <Text style={[playingStyles.textGameStatistics, { marginLeft: Dimensions.get("window").width / 120 }]}>
                        {
                            isOptions ? 'Filtrar' : 'Opciones'
                        }
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Helps