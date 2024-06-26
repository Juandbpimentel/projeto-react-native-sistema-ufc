import { Pressable, View, Text, StyleSheet } from "react-native";

export function ButtonComponent({ title }) {
    function onPress() {
        alert("Button pressed");
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 220,
        height: 58,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
		backgroundColor: "#555",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonTitle: {
        color: "#fff",
        fontSize: 16,
    },
});
