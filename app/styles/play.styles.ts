import { Dimensions, StyleSheet } from "react-native";

export const playStyles = StyleSheet.create({

    containerMenuPlay: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },

    playTitle: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center'
    }

})