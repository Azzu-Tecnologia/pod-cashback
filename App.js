import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Routers from "./src/routes";

export default function App() {
  return <Routers />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});