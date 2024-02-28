import { View } from 'react-native'

import allQuestions from '../../../assets/questions.json'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from './components/ButtonMenu'

import { MenuPropsType } from '../../types/props.types'

import { generateGameAction } from '../../server/actions/game.actions'

const Menu = ({ navigation, categories, amountOptions, amountQuestions, generateGame }: MenuPropsType) => {

    const redirectPlaying = () => {
        if (categories.filter(c => c.isSelect).length > 0) {
            generateGameAction(allQuestions, navigation, amountOptions, amountQuestions, generateGame, categories)
            return
        }

        navigation.navigate('Categories', {
            isCategory: false
        })
    }

    const redirectCategories = () => {
        navigation.navigate('Categories', {
            isCategory: true
        })
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