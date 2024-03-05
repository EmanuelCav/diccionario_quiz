import { View, Image, Dimensions } from "react-native"

import { responseStyle } from "../../styles/response.styles"

import { responseStore } from "../../server/response/store";

const Loading = () => {

    const { loading } = responseStore()

    return (
        <>
            {
                loading &&
                <View style={responseStyle.containerLoading}>
                    <Image source={require('../../../assets/icon.gif')} alt="icon" width={Dimensions.get("window").width / 2} height={Dimensions.get("window").height / 2} resizeMode="center" />
                </View>
            }
        </>
    )
}

export default Loading