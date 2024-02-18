import { View } from 'react-native'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from './components/ButtonMenu'

import { StackNavigation } from '../../types/props.types'

const Menu = ({ navigation }: { navigation: StackNavigation }) => {

    const redirectPlaying = () => {
        navigation.navigate('Playing')
    }

    const redirectCategories = () => {
        navigation.navigate('Categories')
    }

    const redirectOptions = () => {
        navigation.navigate('Options')
    }

    const redirectStatistics = () => {
        navigation.navigate('Statistics')
    }

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='INICIAR' func={redirectPlaying} />
            <ButtonMenu text='CATEGORÍAS' func={redirectCategories} />
            <ButtonMenu text='OPCIONES' func={redirectOptions} />
            <ButtonMenu text='ESTADÍSTICAS' func={redirectStatistics} />
        </View>
    )
}

export default Menu