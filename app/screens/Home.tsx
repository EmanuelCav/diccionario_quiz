import { useEffect } from 'react'
import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import Banner from '../components/add/Banner'
import Menu from '../components/home/Menu'
import TitleHome from '../components/home/TitleHome'

import { StackNavigation } from '../types/props.types'

import { userStore } from '../server/user/store'

import { getStorage } from '../helper/storage'

const Home = ({ navigation }: { navigation: StackNavigation }) => {

  const { userStorage } = userStore()

  useEffect(() => {

    (async () => {

      const storage = await getStorage()

      if (storage) {
        userStorage!(JSON.parse(storage) as any)
      }
    })()

  }, [])

  return (
    <View style={generalStyles.containerGeneral}>
      <Banner />
      <TitleHome />
      <Menu navigation={navigation} />
    </View>
  )
}

export default Home