import { Dimensions, StyleSheet } from "react-native";

export const optionsStyles = StyleSheet.create({

    containerQuestions: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    containerSounds: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerButtonSounds: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get("window").height / 86
    },

    buttonSounds: {
        width: '50%',
        padding: Dimensions.get("window").height / 106
    },

    textButtonSounds: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600',
        textAlign: 'center'
    },

    titleOption: {
        fontSize: Dimensions.get("window").height / 37,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

    amountQuestionsText: {
        fontSize: Dimensions.get("window").height / 37,
        fontWeight: '500',
        color: '#ffffff',
        marginTop: Dimensions.get("window").height / 148,
        textAlign: 'center'
    },

    option: {
        padding: Dimensions.get("window").height / 106,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#f1889b',
        borderStyle: 'solid',
        width: '50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    optionText: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '500'
    }

})