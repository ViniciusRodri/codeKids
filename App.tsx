import React from "react";
import AppLoading from "expo-app-loading";
import { TailwindProvider } from "tailwind-rn";
import Home from "./screens/home";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import utilities from "./tailwind.json";
import { tailwind } from "./tailwind.config.js";
import AppNavigator from "./screens/navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities} config={tailwind}>
      <AppNavigator />
    </TailwindProvider>
  );
}
