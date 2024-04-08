import { Image, View, StyleSheet } from "react-native";

export function ImageViewer({ placeholderImage }) {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={placeholderImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        paddingTop: 28,
    },
    image: {
        width: 320,
        height: 380,
        borderRadius: 18,
    },
});
