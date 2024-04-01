import { View } from 'react-native'

import CategoryStatistic from './components/CategoryStatistic'

import { statisticsStyles } from '../../styles/statistics.styles'

import { IUser } from '../../interface/User'

const CategoryStatistics = ({ user }: { user: IUser }) => {
    return (
        <View style={statisticsStyles.containerCategoryStatistics}>
            <CategoryStatistic statistic={user.definitions} text='Definiciones' />
            <CategoryStatistic statistic={user.synonyms} text='Sinónimos' />
            <CategoryStatistic statistic={user.antonyms} text='Antónimos' />
            <CategoryStatistic statistic={user.corrections} text='Correcciones Ortográficas' />
        </View>
    )
}

export default CategoryStatistics