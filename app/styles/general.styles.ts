import { Dimensions, StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({

    containerBanner: {
        height: '12%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
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
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonAccept: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
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