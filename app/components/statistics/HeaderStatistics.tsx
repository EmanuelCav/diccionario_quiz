import { View, Text } from 'react-native'

import { statisticsStyles } from '../../styles/statistics.styles'

import { IUser } from '../../interface/User'

import { totalCorrects, totalQuestions } from '../../helper/statistics'

const HeaderStatistics = ({ user }: { user: IUser }) => {
    return (
        <View style={statisticsStyles.containerHeaderStatistics}>
            <Text style={statisticsStyles.headerStatistics}>ESTADÍSTICAS TOTALES</Text>
            <Text style={statisticsStyles.statistic}>Preguntas: {totalQuestions(user)}</Text>
            <Text style={statisticsStyles.statistic}>
                Correctas: {totalCorrects(user)} {`(${totalQuestions(user) > 0 ?
                    ((totalCorrects(user) * 100) / totalQuestions(user)).toFixed(2) : (0).toFixed(2)}%)`}
            </Text>
        </View>
    )
}

export default HeaderStatistics