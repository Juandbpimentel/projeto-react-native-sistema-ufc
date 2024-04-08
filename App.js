import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ImageViewer } from "./components/ImageViewer";
import { ButtonComponent } from "./components/Button";

const PlaceholderImage = require("./assets/placeholder.png");

export default function App() {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 30,
                    alignSelf: "center",
                    marginTop: 10,
                }}
            >
                This is my first app
            </Text>
            <ImageViewer placeholderImage={PlaceholderImage}></ImageViewer>
            <View style={styles.footerContainer}>
                <ButtonComponent title="Escolha uma foto"></ButtonComponent>
                <ButtonComponent title="Use essa foto"></ButtonComponent>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
        justifyContent: "flex-end",
    },
});
