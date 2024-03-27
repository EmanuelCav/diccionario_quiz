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
    },

    buttonMenu: {
        padding: Dimensions.get("window").height / 74,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonMenu: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    }

})