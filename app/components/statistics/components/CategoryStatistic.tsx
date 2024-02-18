import { Text, View } from 'react-native'

import { ICategory } from '../../../interface/User'

import { statisticsStyles } from '../../../styles/statistics.styles'

const CategoryStatistic = ({ category }: { category: ICategory }) => {
    return (
        <View style={statisticsStyles.containerCategoryStatistic}>
            <Text style={statisticsStyles.headerStatistics}>{category.category}</Text>
            <Text style={statisticsStyles.statistic}>Preguntas: {category.questions}</Text>
            <Text style={statisticsStyles.statistic}>
                Correctas: {category.corrects} {`(${category.questions > 0 ?
                    ((category.corrects * 100) / category.questions).toFixed(2) : (0).toFixed(2)}%)`}
            </Text>
        </View>
    )
}

export default CategoryStatistic