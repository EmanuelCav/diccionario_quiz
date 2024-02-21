import { View, Text } from 'react-native'

import { categoriesStyles } from '../../styles/categories.styles'

const TitleCategories = () => {
    return (
        <View style={categoriesStyles.containerTitleCategories}>
            <Text style={categoriesStyles.textTitle}>Selecciona las categorías gramaticales de las palabras para iniciar el juego</Text>
        </View>
    )
}

export default TitleCategories