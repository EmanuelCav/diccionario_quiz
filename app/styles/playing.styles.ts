import { Dimensions, StyleSheet } from "react-native";

export const playingStyles = StyleSheet.create({

    containerQuestion: {
        height: '48%',
        backgroundColor: '#f99aaa',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#ffffff',
        paddingHorizontal: Dimensions.get("window").width / 60,
        paddingVertical: Dimensions.get("window").height / 123,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textQuestionText: {
        fontSize: Dimensions.get("window").height / 37,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerGameStatistics: {
        height: '10%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },

    textGameStatistics: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    containerOptions: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
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
        marginVertical: Dimensions.get("window").height / 61.66
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
        backgroundColor: 'rgba(93, 193, 185, 0.5)',
    },

    containPreFinish: {
        width: '66.66%',
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#5dc1b9',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: Dimensions.get("window").height / 106
    },

    textPreFinish: {
        fontSize: Dimensions.get("window").height / 41,
        fontWeight: '600',
        color: '#5dc1b9',
        textAlign: 'center',
        marginTop: Dimensions.get("window").height / 92
    },

    containFinish: {
        width: '95%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#5dc1b9',
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
        marginTop: Dimensions.get("window").height / 92
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
    }

})