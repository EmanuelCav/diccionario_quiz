import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'

import { StackNavigation } from '../types/props.types'

const Home = ({ navigation }: { navigation: StackNavigation }) => {
  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <Menu navigation={navigation} />
    </View>
  )
}

export default Home