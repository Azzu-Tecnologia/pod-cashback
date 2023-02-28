import { useState } from "react";
import Routers from "./src/routes";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default function App() {
  const useFonts = async () =>
    await Font.loadAsync({
      "Montserrat-Black": require("./src/assets/fonts/Montserrat-Black.ttf"),
      "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-ExtraBold": require("./src/assets/fonts/Montserrat-ExtraBold.ttf"),
      "Montserrat-ExtraLight": require("./src/assets/fonts/Montserrat-ExtraLight.ttf"),
      "Montserrat-Light": require("./src/assets/fonts/Montserrat-Light.ttf"),
      "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Thin": require("./src/assets/fonts/Montserrat-Thin.ttf"),
    });
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return <Routers />;
}
