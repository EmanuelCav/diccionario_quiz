import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'

import { StackNavigation } from '../types/props.types'

import { userStore } from '../server/user/store'

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const { categories } = userStore()

  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <Menu navigation={navigation} categories={categories} />
    </View>
  )
}

export default Home