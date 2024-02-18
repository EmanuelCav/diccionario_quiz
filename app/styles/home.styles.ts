import { Dimensions, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({

    containerMenu: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    buttonMenu: {
        padding: Dimensions.get("window").height / 74,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%'
    },

    textButtonMenu: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    }

})