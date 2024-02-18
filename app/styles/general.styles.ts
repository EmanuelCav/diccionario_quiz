import { Dimensions, StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({

    containerBanner: {
        height: '20%',
        width: '100%'
    },

    containerGeneral: {
        flex: 1,
        width: '100%'
    },

    containerButtonAccept: {
        height: '18%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonAccept: {
        padding: Dimensions.get("window").height / 74,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    textButtonAccept: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    }

})