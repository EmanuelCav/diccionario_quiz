import { View } from "react-native"

import Banner from "../components/add/Banner"
import MenuPlay from "../components/play/MenuPlay"

import { generalStyles } from "../styles/general.styles"

import { StackNavigation } from "../types/props.types"

import { userStore } from "../server/user/store"
import { gameStore } from "../server/question/store"
import { responseStore } from "../server/response/store"

const Play = ({ navigation }: { navigation: StackNavigation }) => {

    const { amountQuestions } = userStore()
    const { generateGame } = gameStore()
    const { changeLoading } = responseStore()

    return (
        <View style={generalStyles.containerGeneral}>
            <Banner />
            <MenuPlay amountQuestions={amountQuestions} changeLoading={changeLoading} generateGame={generateGame} navigation={navigation} />
        </View>
    )
}

export default Play