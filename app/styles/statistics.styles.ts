import { Dimensions, StyleSheet } from "react-native";

export const statisticsStyles = StyleSheet.create({

    containerHeaderStatistics: {
        height: '12%',
        width: '100%',
        padding: Dimensions.get("window").height / 106,
    },

    containerCategoryStatistics: {
        flex: 1,
        width: '100%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#f1889b'
    },

    containerCategoryStatistic: {
        padding: Dimensions.get("window").height / 106,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#f1889b',
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    headerStatistics: {
        fontSize: Dimensions.get("window").height / 37,
        color: '#f1889b',
        fontWeight: '500'
    },

    statistic: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#ffffff',
        fontWeight: '500'
    }

})