import { View } from 'react-native'

import ButtonAccept from '../components/components/ButtonAccept'
import TitleCategories from '../components/categories/TitleCategories'
import ShowCategories from '../components/categories/ShowCategories'

import { StackNavigation } from '../types/props.types'

import { userStore } from '../server/user/store'
import { changeCategoryAction } from '../server/actions/user.actions'

import { generalStyles } from '../styles/general.styles'

const Categories = ({ navigation }: { navigation: StackNavigation }) => {

    const { categories, changeCategory } = userStore()

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <TitleCategories />
            <ShowCategories categories={categories} changeCategoryAction={changeCategoryAction} changeCategory={changeCategory} />
            <ButtonAccept text='ACEPTAR' func={goBack} />
        </View>
    )
}

export default Categories