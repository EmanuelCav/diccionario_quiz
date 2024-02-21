import { View } from 'react-native'

import { ICategory } from '../../interface/User'
import { ShowCategoriesPropsType } from '../../types/props.types'

import { categoriesStyles } from '../../styles/categories.styles'

import Category from './components/Category'

const ShowCategories = ({ categories, changeCategoryAction, changeCategory }: ShowCategoriesPropsType) => {
    return (
        <View style={categoriesStyles.containerShowCategories}>
            {
                categories.map((category: ICategory) => {
                    return <Category category={category} changeCategoryAction={changeCategoryAction} changeCategory={changeCategory} key={category.category} />
                })
            }
        </View>
    )
}

export default ShowCategories