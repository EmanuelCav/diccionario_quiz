import { useEffect } from 'react'
import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'
import TitleHome from '../components/home/TitleHome'

import { StackNavigation } from '../types/props.types'

import { userStore } from '../server/user/store'
import { gameStore } from '../server/question/store'
import { responseStore } from '../server/response/store'

import { getStorage } from '../helper/storage'

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const { categories, amountQuestions, amountOptions, userStorage } = userStore()
  const { generateGame } = gameStore()
  const { changeLoading } = responseStore()

  useEffect(() => {

    (async () => {

      const storage = await getStorage()

      console.log(storage);
      

      if (storage) {
        userStorage!(JSON.parse(storage) as any)
      }
    })()

  }, [])

  return (
    <View style={generalStyles.containerGeneral}>
      {/* <Banner /> */}
      <TitleHome />
      <Menu navigation={navigation} categories={categories} generateGame={generateGame} amountQuestions={amountQuestions} amountOptions={amountOptions} changeLoading={changeLoading} />
    </View>
  )
}

export default Home