import { StyleSheet, Text, View } from "react-native";

export default function ServiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Service</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
