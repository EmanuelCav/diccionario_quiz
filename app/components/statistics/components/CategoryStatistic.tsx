import { Text, View } from 'react-native'

import { CategoryStatisticPropsType } from '../../../types/props.types'

import { statisticsStyles } from '../../../styles/statistics.styles'

const CategoryStatistic = ({ statistic, text }: CategoryStatisticPropsType) => {
    return (
        <View style={statisticsStyles.containerCategoryStatistic}>
            <Text style={statisticsStyles.headerStatistics}>{text}</Text>
            <Text style={statisticsStyles.statistic}>Preguntas: {statistic.amount}</Text>
            <Text style={statisticsStyles.statistic}>
                Correctas: {statistic.corrects} {`(${statistic.amount > 0 ?
                    ((statistic.corrects * 100) / statistic.amount).toFixed(2) : (0).toFixed(2)}%)`}
            </Text>
        </View>
    )
}

export default CategoryStatistic