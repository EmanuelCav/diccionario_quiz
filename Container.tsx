import { ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export default function Container({ children }: { children: ReactNode }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: '#ffcdd2',
        padding: Dimensions.get("window").height / 106
    },
});
