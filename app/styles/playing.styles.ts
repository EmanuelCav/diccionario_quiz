import { Dimensions, StyleSheet } from "react-native";

export const playingStyles = StyleSheet.create({

    containerQuestion: {
        height: '45%',
        backgroundColor: '#f99aaa',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#ffffff',
        paddingHorizontal: Dimensions.get("window").width / 60,
        paddingVertical: Dimensions.get("window").height / 123,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textQuestionText: {
        fontSize: Dimensions.get("window").height / 37,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerGameStatistics: {
        height: '15%',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },

    containerQuestionGameStatistics: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    containerHelps: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    textGameStatistics: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    textInputOption: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#f99aaa',
        fontWeight: '600'
    },

    containerOptions: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1
    },

    containerKeyboard: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flex: 1
    },

    containerSectionOptions: {
        width: '50%',
        height: '100%',
        padding: Dimensions.get("window").height / 106
    },

    containerOption: {
        padding: Dimensions.get("window").height / 106,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: Dimensions.get("window").height / 61.66,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textOption: {
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerAnswer: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ffffff',
        padding: Dimensions.get("window").height / 74
    },

    textAnswer: {
        fontSize: Dimensions.get("window").height / 46,
        textAlign: 'center'
    },

    containerResponseAnswer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    containerPreFinish: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(249,154,170,0.5)',
    },

    containPreFinish: {
        width: '66.66%',
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#f99aaa',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    },

    textPreFinish: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600',
        color: '#f99aaa',
        textAlign: 'center',
        marginTop: Dimensions.get("window").height / 92
    },

    containFinish: {
        width: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#f99aaa',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    },

    buttonFinish: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '100%',
        marginTop: Dimensions.get("window").height / 92,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonFinish: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    containerStatisticsFinish: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },

    containerActionsFinish: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    containerHelpButton: {
        padding: Dimensions.get("window").height / 106,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    containIconHelpButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    containerInputKeyboard: {
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },

    containerTextKeyboard: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column'
    },

    containSectionKeys: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonKey: {
        padding: Dimensions.get("window").height / 106,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        width: Dimensions.get("window").width / 11,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textButtonKey: {
        fontSize: Dimensions.get("window").height / 46,
        fontWeight: '600',
        color: '#ffffff',
    },

    containerShowInput: {
        width: '82%',
        padding: Dimensions.get("window").height / 106,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#f99aaa',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        backgroundColor: '#fbdae0',
        position: 'relative'
    },

    containAcceptInput: {
        padding: Dimensions.get("window").height / 106,
        width: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    buttonHelpAdd: {
        padding: Dimensions.get("window").height / 106,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '66.66%',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderStyle: 'solid',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: Dimensions.get("window").height / 92
    },

    containIconHelpAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

})