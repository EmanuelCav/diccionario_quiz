import { View } from 'react-native'

import { statisticsStyles } from '../../styles/statistics.styles'

import { ICategory, IUser } from '../../interface/User'
import CategoryStatistic from './components/CategoryStatistic'

const CategoryStatistics = ({ user }: { user: IUser }) => {
    return (
        <View style={statisticsStyles.containerCategoryStatistics}>
            {
                user.categories.map((category: ICategory) => {
                    return <CategoryStatistic category={category} key={category.category} />
                })
            }
        </View>
    )
}

export default CategoryStatistics