import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import { TailwindProvider } from "tailwind-rn";
import * as Font from "expo-font";
import utilities from "./tailwind.json";
import tailwind from "./tailwind.config.js";
import AppNavigator from "./screens/navigation";
import { SplashScreen } from "expo";

export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Itim: require("./assets/font.ttf"),
      });
      SplashScreen.hideAsync(); // Oculta a tela de inicialização assim que as fontes forem carregadas
    };

    loadFonts();
  }, []);

  // Renderiza o componente AppLoading enquanto as fontes estão sendo carregadas
  if (!Font.isLoaded("Itim")) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {}}
        onError={() => {}}
      />
    );
  }

  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities} config={tailwind}>
      <AppNavigator />
    </TailwindProvider>
  );
}
