import { Text, Dimensions, Pressable } from 'react-native'
import Checkbox from 'expo-checkbox'

import { CategoryPropsType } from '../../../types/props.types'

import { categoriesStyles } from '../../../styles/categories.styles'

const Category = ({ category, changeCategoryAction, changeCategory }: CategoryPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? `${category.isSelect ? '#f99aaa' : '#f1889b'}` : `${category.isSelect ? '#f1889b' : '#f99aaa'}`
            },
            categoriesStyles.containerCategory
        ]} onPress={() => changeCategoryAction(changeCategory, category)}>
            <Text style={categoriesStyles.category}>{category.category}</Text>
            <Checkbox
                color={'#ffcdd2'}
                value={category.isSelect}
                style={{ padding: Dimensions.get("window").height / 92.5 }}
                onValueChange={() => changeCategoryAction(changeCategory, category)}
            />
        </Pressable>
    )
}

export default Category