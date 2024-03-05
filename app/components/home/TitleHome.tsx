import { View, Text, Image } from 'react-native'

import { homeStyles } from '../../styles/home.styles'

const TitleHome = () => {
    return (
        <View style={homeStyles.containerTitleHome}>
            <Image source={require('../../../assets/icon_background.png')} alt='icon' style={homeStyles.imageBackground} />
            <Text style={homeStyles.textTitleHome}>Diccionario Quiz</Text>
        </View>
    )
}

export default TitleHome