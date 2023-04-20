import { StyleSheet, Text, View } from "react-native";

export function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Groups</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "white",
  },
});
