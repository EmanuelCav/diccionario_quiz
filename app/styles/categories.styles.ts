import { Dimensions, StyleSheet } from "react-native";

export const categoriesStyles = StyleSheet.create({

    containerTitleCategories: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textTitle: {
        fontSize: Dimensions.get("window").height / 37,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    },

    containerShowCategories: {
        height: '55%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    containerCategory: {
        width: '100%',
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderStyle: 'solid'
    },

    category: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#ffffff',
        fontWeight: '500'
    }

})