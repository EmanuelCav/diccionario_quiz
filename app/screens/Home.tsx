import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'

import { StackNavigation } from '../types/props.types'

import { userStore } from '../server/user/store'
import { gameStore } from '../server/question/store'

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const { categories, amountQuestions, amountOptions } = userStore()
  const { generateGame } = gameStore()

  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <Menu navigation={navigation} categories={categories} generateGame={generateGame} amountQuestions={amountQuestions} amountOptions={amountOptions} />
    </View>
  )
}

export default Home