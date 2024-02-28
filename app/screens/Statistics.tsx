import { View } from 'react-native'

import { userStore } from '../server/user/store'

import ButtonAccept from '../components/components/ButtonAccept'
import HeaderStatistics from '../components/statistics/HeaderStatistics'
import CategoryStatistics from '../components/statistics/CategoryStatistics'

import { StackNavigation } from '../types/props.types'

import { generalStyles } from '../styles/general.styles'

const Statistics = ({ navigation }: { navigation: StackNavigation }) => {

    const user = userStore()

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <HeaderStatistics user={user} />
            <CategoryStatistics user={user} />
            <ButtonAccept text='ACEPTAR' func={goBack} disabled={false} />
        </View>
    )
}

export default Statistics