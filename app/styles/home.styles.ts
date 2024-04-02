import { Dimensions, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({

    containerMenu: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    containerTitleHome: {
        width: '100%',
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },

    imageBackground: {
        width: Dimensions.get("window").height / 8,
        height: Dimensions.get("window").height / 8,
    },

    textTitleHome: {
        fontSize: Dimensions.get("window").height / 29,
        fontWeight: '600',
        color: '#ffffff'
    }

})